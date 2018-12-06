/*
 * Tencent is pleased to support the open source community by making 蓝鲸 available.,
 * Copyright (C) 2017,-2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the ",License",); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an ",AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

package metadata

import (
	"configcenter/src/common"
	"configcenter/src/common/mapstr"
)

// BaseResp common result struct
type BaseResp struct {
	Result bool   `json:"result"`
	Code   int    `json:"bk_error_code"`
	ErrMsg string `json:"bk_error_msg"`
}

// SuccessBaseResp default result
var SuccessBaseResp = BaseResp{Result: true, Code: common.CCSuccess, ErrMsg: common.CCSuccessStr}

// CreatedCount created count struct
type CreatedCount struct {
	Count int64 `json:"created_count"`
}

// UpdatedCount created count struct
type UpdatedCount struct {
	Count int64 `json:"updated_count"`
}

// DeletedCount created count struct
type DeletedCount struct {
	Count int64 `json:"deleted_count"`
}

// ExceptionResult exception info
type ExceptionResult struct {
	Message     string      `json:"message"`
	Code        int64       `json:"code"`
	Data        interface{} `json:"data"`
	OriginIndex int64       `json:"origin_index"`
}

// CreatedDataResult common created result definition
type CreatedDataResult struct {
	OriginIndex int64  `json:"origin_index"`
	ID          uint64 `json:"id"`
}

// RepeatedDataResult repeated data
type RepeatedDataResult struct {
	OriginIndex int64         `json:"origin_index"`
	Data        mapstr.MapStr `json:"data"`
}

// UpdatedDataResult common update operation result
type UpdatedDataResult struct {
	OriginIndex int64  `json:"origin_index"`
	ID          uint64 `json:"id"`
}

// SetDataResult common set result definition
type SetDataResult struct {
	UpdatedCount `json:",inline"`
	CreatedCount `json:",inline"`
	Created      []CreatedDataResult `json:"created"`
	Updated      []UpdatedDataResult `json:"updated"`
	Exceptions   []ExceptionResult   `json:"exception"`
}

// CreateManyInfoResult create many function return this result struct
type CreateManyInfoResult struct {
	Created    []CreatedDataResult  `json:"created"`
	Repeated   []RepeatedDataResult `json:"repeated"`
	Exceptions []ExceptionResult    `json:"exception"`
}

// CreateManyDataResult the data struct definition in create many function result
type CreateManyDataResult struct {
	CreateManyInfoResult `json:",inline"`
}

// CreateOneDataResult the data struct definition in create one function result
type CreateOneDataResult struct {
	Created CreatedDataResult `json:"created"`
}

// SearchDataResult common search data result
type SearchDataResult struct {
	Count int64           `json:"count"`
	Info  []mapstr.MapStr `json:"info"`
}

//ReadModelClassifition  read model classifition api http response return result struct
type ReadModelClassifition struct {
	BaseResp `json:",inline"`
	Data     struct {
		Count int              `json:"count"`
		Info  []Classification `json:"info"`
	} `json:"data"`
}
