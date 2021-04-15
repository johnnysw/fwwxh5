
// 表单验证
export const formValidate = (form, nameList, type) => {
    let flag = true;

    for (const item of nameList){
        if (!form[item.name] && type === 'required'){
            flag = false;
            uni.showToast({
                title: item.label + '未填写',
                icon: 'none'
            })
            return flag;
        }
    }
    return flag;
}
// 返回上一页
export const goCancel = () => {
    uni.navigateBack({
        delta: -1
    })
}
// uni弹框
export const showModal = option => {
    const { title, content, success, ...other } = option;
    uni.showModal({
        title,
        content,
        success,
        ...other
    })
}
// 批量删除
export const batchDelete = option => {
    showModal({
        title: '批量删除',
        content: '确定要批量删除' + option.title + '吗?',
        success: res => {
            if (res.confirm){
                option.okCallBack()
            } else {
                option.noCallBack && option.noCallBack()
            }
        }
    })
}