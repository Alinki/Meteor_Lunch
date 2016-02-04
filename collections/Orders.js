/**
 * Created by ukozyachaya on 2/3/2016.
 */
Orders = new Meteor.Collection('orders');

OrderSchema = new SimpleSchema({
    name:{
       type: String,
       label: "Name"
    },
    description:{
        type: String,
        label: "Description"
    },
    author:{
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt:{
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Orders.attachSchema(OrderSchema);