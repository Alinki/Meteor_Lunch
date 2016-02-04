/**
 * Created by ukozyachaya on 2/3/2016.
 */
FlowRouter.route('/', {
    name:'home',
    action:function(){
        console.log("Yeah! We are on the home layout:");
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/orders', {
    name:'orders',
    action:function(){
        console.log("Yeah! We are on the test layout :");
        BlazeLayout.render('MainLayout', {main: 'Orders'});
    }
});