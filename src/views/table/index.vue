<template>
	<div class="app-container">

		<el-container>
			<el-header class="select-page">
				<el-form ref="form" :model="form" label-width="120px" size="small">
					<el-row>
						<el-col :span="12">
							<el-form-item label="登录名:" prop="loginId">
								<el-input v-model="form.loginId" />
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="密码:" prop="passwd">
								<el-input v-model="form.passwd" />
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<el-form-item>
								<el-button type="success" @click="onSelect">查询</el-button>
								<el-button type="info" @click="resetForm('form')" >重置</el-button>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</el-header>

			<el-main>
				<el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row stripe>
					<el-table-column align="center" label="序号" width="95">
						<template slot-scope="scope">
							{{ scope.$index + 1}}
						</template>
					</el-table-column>
					<el-table-column label="登录名">
						<template slot-scope="scope">
							{{ scope.row.loginId }}
						</template>
					</el-table-column>
					<el-table-column label="密码" width="110" align="center">
						<template slot-scope="scope">
							<span>{{ scope.row.passwd }}</span>
						</template>
					</el-table-column>
					<el-table-column align="center" prop="created_at" label="操作" width="200">
						<template slot-scope="scope">
							<el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
							<el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
							<el-button @click="view(scope.row)" type="text" size="small">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-main>
			<el-footer>
				<div class="pagination-page">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="curPage" :page-sizes="[10, 20, 50, 100]"
					 :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
					</el-pagination>
				</div>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import {
		getList
	} from '@/api/table'
	import Page from '@/utils/page.js'

	export default {
		data() {
			return {
				list: null,
				listLoading: true,
				form: {
					loginId: '',
					passwd: ''
				},
				pageSize:10,
				curPage:1,
				total:0
			}
		},
		created() {
			this.fetchData();
		},
		methods: {
			fetchData() {
				this.listLoading = true
				var startRow = (this.curPage - 1) * this.pageSize;
				var selectObj = Page.buildSelectObj(startRow,this.pageSize,this.form)
				getList(selectObj).then(response => {
					this.list = response.data.list
					this.listLoading = false
					this.total = response.data.count;
				})
			},
			handleSizeChange(val) {
				this.pageSize = val;
				this.fetchData();
			},
			handleCurrentChange(val) {
				this.curPage = val;
				this.fetchData();
			},
			onSelect() {
				this.fetchData();
			},
			resetForm(formName){
				 this.$refs[formName].resetFields();
			},
			view(row){
				
			},
			edit(row){
				
			},
			del(row){
				console.log(row)
			}
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.pagination-page {
		float: right;
	}
	.select-page{
		text-align: right; 
		font-size: 10px;
		margin-bottom: 10px;
	}
</style>
