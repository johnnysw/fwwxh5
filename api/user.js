import ajax from './index';

// 登录
export const reqLogin = data => ajax('/login', data, 'POST')
// 请求公司列表
export const reqCompanyList = data => ajax('/company', data, 'GET')
// 请求电子文件夹列表
export const reqFolders = data => ajax('/folder', data, 'GET');
// 请求用户名片
export const reqUsers = data => ajax('/user', data, 'GET');
// 查询用户详情
export const reqUserInfo = data => ajax('/user/info', data, 'GET');
// 查询电子名片夹
export const reqFoldersList = data => ajax('/folder', data, 'GET');
// 添加电子名片夹
export const reqAddFolders = data => ajax('/add/folder', data, 'POST');
// 删除电子名片夹
export const reqDeleteFolders = data => ajax('/delete/folder', data, 'POST');
// 删除用户
export const reqDeleteUsers = data => ajax('/del/user', data, 'POST');
// 关注用户
export const reqBatchCare = data => ajax('/add/attention', data, 'POST');
// 取消关注
export const reqCancelCare = data => ajax('/quit/attention', data, 'POST');
// 获取信息列表
export const reqNewsList = data => ajax('/news', data, 'GET');
// 新增消息
export const reqAddNews = data => ajax('/add/news', data, 'POST');
// 编辑消息
export const reqUpdateNews = data => ajax('/edit/news', data, 'POST');
// 删除消息
export const reqDeleteNews = data => ajax('/delete/news', data ,'POST');
// 增加单位
export const reqAddCompany = data => ajax('/add/company', data, 'POST');
// 删除单位
export const reqDeleteCompany = data => ajax('/delete/company', data, 'POST');
// 获取单位数据
export const reqCompanyData = data => ajax('/company/info', data, 'GET');
// 更新用户信息
export const reqUpdateUser = data => ajax('/edit/user', data, 'POST');