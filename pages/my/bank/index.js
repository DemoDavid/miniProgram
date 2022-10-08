// pages/my/bank/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar:''
    },
    onShow() {
        let that = this;
        wx.getStorage({
            key:'avatar',
            success(res){
                that.setData({
                    avatar:res.data
                })
            }
        })
    }
})