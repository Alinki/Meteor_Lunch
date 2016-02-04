/**
 * Created by ukozyachaya on 2/3/2016.
 */
Meteor.publish('orders',function(){
    return Orders.find({author:this.userId});
})