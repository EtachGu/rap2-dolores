webpackJsonp([12],{374:function(e,t,a){t=e.exports=a(15)(),t.push([e.id,".UserList{padding:2rem}.UserList .header{margin-bottom:2rem}.UserList .header .title{font-size:2rem}.UserList .toolbar{margin-bottom:1rem}",""])},391:function(e,t,a){var l=a(374);"string"==typeof l&&(l=[[e.id,l,""]]);a(16)(l,{});l.locals&&(e.exports=l.locals)},745:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),n=l(r),s=a(18),d=a(10),u=a(296),c=l(u),o=a(42);a(391);var i=function(e){var t=(e.history,e.match),a=e.location,l=e.users,r=(e.onAddUser,e.onDeleteUser);e.onFetchUserList,e.tmpl;return n.default.createElement("section",{className:"UserList"},n.default.createElement("div",{className:"header"},n.default.createElement("span",{className:"title"},"用户管理")),n.default.createElement("nav",{className:"toolbar clearfix"}),n.default.createElement("div",{className:"body"},n.default.createElement("table",{className:"table"},n.default.createElement("thead",null,n.default.createElement("tr",null,n.default.createElement("th",null,"姓名"),n.default.createElement("th",null,"邮箱"),n.default.createElement("th",{className:"w100"},"操作"))),n.default.createElement("tbody",null,l.data.map(function(e){return n.default.createElement("tr",{key:e.id},n.default.createElement("td",null,n.default.createElement(s.Link,{to:"/repository?user="+e.id},"#",e.id," ",e.fullname)),n.default.createElement("td",null,e.email),n.default.createElement("td",null,n.default.createElement("span",{style:{cursor:"not-allowed"}},n.default.createElement(s.Link,{to:t.url,onClick:function(t){return r(e.id)},className:"operation disabled"},"删除"))))})))),n.default.createElement("div",{className:"footer"},n.default.createElement(c.default,{location:a,calculated:l.pagination})))},m=function(e){return{users:e.users}},f={onAddUser:o.addUser,onDeleteUser:o.deleteUser,onFetchUserList:o.fetchUserList};t.default=(0,d.connect)(m,f)(i)}});
//# sourceMappingURL=12.0dc8ccf5.chunk.js.map