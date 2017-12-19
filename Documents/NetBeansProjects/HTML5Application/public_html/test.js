/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function hello(){
    alert("hello!!");
}

$(function (){
    $('.test').click(function (){
       $('input').fadeOut(5000); 
    });
});

