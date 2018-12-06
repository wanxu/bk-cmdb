/*
 * Tencent is pleased to support the open source community by making 蓝鲸 available.
 * Copyright (C) 2017-2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

package mongo

import (
	"configcenter/src/common/mapstr"
	"configcenter/src/common/universalsql"
	"encoding/json"
)

var _ universalsql.Condition = (*mongoCondition)(nil)

type mongoCondition struct {
	elements []universalsql.ConditionElement
	and      []universalsql.ConditionElement
	or       []universalsql.ConditionElement
	embed    map[string]universalsql.Condition // key is the embed filed name
}

// NewCondition create a condition instance
func NewCondition() universalsql.Condition {
	return &mongoCondition{
		embed: map[string]universalsql.Condition{},
	}
}

// NewConditionFromMapStr create a condition by MapStr
func NewConditionFromMapStr(cond mapstr.MapStr) universalsql.Condition {

	return nil
}

func (m *mongoCondition) ToSQL() (string, error) {
	sql, err := json.Marshal(m.ToMapStr())
	return string(sql), err
}

func (m *mongoCondition) ToMapStr() mapstr.MapStr {

	result := mapstr.New()

	// merge elements, default
	for _, ele := range m.elements {
		result.Merge(ele.ToMapStr())
	}

	// merge and elements
	andElements := []mapstr.MapStr{}
	for _, ele := range m.and {
		andElements = append(andElements, ele.ToMapStr())
	}
	if 0 != len(andElements) {
		result.Set(universalsql.AND, andElements)
	}

	// merge or elements
	orElements := []mapstr.MapStr{}
	for _, ele := range m.or {
		orElements = append(orElements, ele.ToMapStr())
	}
	if 0 != len(orElements) {
		result.Set(universalsql.OR, orElements)
	}

	// merge embed elements
	for embedName, embedCondition := range m.embed {
		result.Set(embedName, embedCondition.ToMapStr())
	}

	return result
}

func (m *mongoCondition) Element(elements ...universalsql.ConditionElement) universalsql.Condition {
	m.elements = append(m.elements, elements...)
	return m
}

func (m *mongoCondition) And(elements ...universalsql.ConditionElement) universalsql.Condition {
	m.and = append(m.and, elements...)
	return m
}

func (m *mongoCondition) Or(elements ...universalsql.ConditionElement) universalsql.Condition {
	m.or = append(m.or, elements...)
	return m
}

func (m *mongoCondition) Embed(embedName string) (origin, embed universalsql.Condition) {
	origin = m
	embed = NewCondition()
	m.embed[embedName] = embed
	return origin, embed
}
