"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[900],{7978:function(n,e,r){r.r(e),r.d(e,{default:function(){return on}});var t,a,i,o,s,l,d,c,p,u,x,h,m=r(1686),f=r.n(m),b=r(5705),j=r(6727),g=r(168),Z=r(5867),v=r(8494),P=(0,Z.ZP)(b.l0)(t||(t=(0,g.Z)(["\n  padding: 18px 12px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n"]))),y=Z.ZP.div(a||(a=(0,g.Z)(["\n  position: relative;\n"]))),w=(0,Z.ZP)(b.gN)(i||(i=(0,g.Z)(["\n  width: 250px;\n  padding: 4px 8px 4px 28px;\n  border: 2px solid #000000;\n  border-radius: 8px;\n  margin-top: 4px;\n"]))),k=(0,Z.ZP)(v.Bmn)(o||(o=(0,g.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  fill: #757575;\n"]))),C=(0,Z.ZP)(v.MdO)(s||(s=(0,g.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  fill: #757575;\n"]))),F=Z.ZP.button(l||(l=(0,g.Z)(["\n  width: 250px;\n  color: #ffffff;\n  background-color: #ea8a2a;\n  border: transparent;\n  border-radius: 8px;\n  padding: 4px 8px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"]))),N=Z.ZP.p(d||(d=(0,g.Z)(["\n  color: red;\n"]))),_=r(9434),I=r(1761),A=r(3634),S=r(2791),Y=r(184),q={name:"",number:""},B=function(n){var e=n.name;return(0,Y.jsx)(b.Bc,{name:e,render:function(n){return(0,Y.jsx)(N,{children:n})}})},O=(0,j.Ry)().shape({name:(0,j.Z_)().min(5).max(50).required(),number:(0,j.Z_)().matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,"does not match the required format").required()}),R=function(n){n.onSubmit;var e=(0,S.useId)(),r=(0,S.useId)(),t=(0,_.v9)(I.Af),a=(0,_.I0)();return(0,Y.jsx)(b.J9,{initialValues:q,validationSchema:O,onSubmit:function(n,e){var r=n.name,i=n.number,o=e.resetForm,s=t.some((function(n){return n.name.trim().toLowerCase()===r.trim().toLowerCase()}));if(s)f().Notify.failure("".concat(r," is already in contacts"));else{var l={name:r.trim(),number:i};a((0,A.uK)(l)),o()}},children:function(n){var t=n.isSubmitting;return(0,Y.jsxs)(P,{autoComplete:"off",children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)("label",{htmlFor:e,children:"Name"}),(0,Y.jsxs)(y,{children:[(0,Y.jsx)(w,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name",id:e}),(0,Y.jsx)(k,{})]}),(0,Y.jsx)(B,{name:"name"})]}),(0,Y.jsxs)("div",{children:[(0,Y.jsx)("label",{htmlFor:r,children:"Number"}),(0,Y.jsxs)(y,{children:[(0,Y.jsx)(w,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Phone number",id:r}),(0,Y.jsx)(C,{})]}),(0,Y.jsx)(B,{name:"number"})]}),(0,Y.jsx)(F,{type:"submit",disabled:t,children:"Add contact"})]})}})},z=Z.ZP.ul(c||(c=(0,g.Z)(["\n  padding-left: 24px;\n"]))),D=Z.ZP.li(p||(p=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),L=Z.ZP.p(u||(u=(0,g.Z)(["\n  font-weight: 700;\n\n  & span {\n    font-weight: 400;\n  }\n"]))),T=Z.ZP.button(x||(x=(0,g.Z)(["\n  border: 1px solid #000000;\n  border-radius: 4px;\n  padding: 4px 8px;\n  cursor: pointer;\n  background-color: #ffffff;\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background-color: #ea8a2a;\n    border-color: #bf6b16;\n  }\n"])));function E(n){var e=n.contact,r=e.id,t=e.name,a=e.number,i=(0,_.I0)(),o=(0,_.v9)(I.NH);return(0,Y.jsxs)(D,{children:[(0,Y.jsxs)(L,{children:[t,": ",(0,Y.jsx)("span",{children:a})]}),(0,Y.jsx)(T,{type:"button","data-id":r,onClick:function(){return i((0,A.GK)(r))},disabled:o,children:"Delete"})]})}function H(){var n=(0,_.v9)(I.Af),e=(0,_.v9)(I.DI);return n.length?e.length?(0,Y.jsx)(z,{children:e.map((function(n){return(0,Y.jsx)(E,{contact:n},n.id)}))}):null:(0,Y.jsx)("p",{children:"The Phonebook is empty!"})}var J,K,M,G,V=Z.ZP.div(h||(h=(0,g.Z)(["\n  font-size: 16px;\n  color: red;\n  text-align: center;\n  padding: 24px;\n"]))),$=function(){return(0,Y.jsx)(V,{children:(0,Y.jsx)("p",{children:"OOPS! There was an ERROR!"})})},Q=Z.ZP.label(J||(J=(0,g.Z)(["\n  text-align: left;\n  margin-bottom: 4px;\n"]))),U=Z.ZP.div(K||(K=(0,g.Z)(["\n  position: relative;\n  margin-bottom: 24px;\n"]))),W=Z.ZP.input(M||(M=(0,g.Z)(["\n  width: 250px;\n  padding: 4px 8px 4px 28px;\n  border: 2px solid #000000;\n  border-radius: 8px;\n"]))),X=(0,Z.ZP)(v.Yfv)(G||(G=(0,g.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  fill: #757575;\n"]))),nn=r(1634);function en(){var n=(0,_.v9)(nn.AD),e=(0,_.I0)(),r=(0,S.useId)();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Q,{htmlFor:r,children:"Find contacts by name"}),(0,Y.jsxs)(U,{children:[(0,Y.jsx)(W,{type:"text",placeholder:"Name",value:n,onChange:function(n){return e((0,nn.zp)(n.currentTarget.value))},id:r}),(0,Y.jsx)(X,{})]})]})}var rn=r(3430),tn=function(){return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(rn.g4,{height:"50",width:"50",radius:"9",color:"#3F51B5",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})})},an=r(6907);function on(){var n=(0,_.I0)(),e=(0,_.v9)(I.NH),r=(0,_.v9)(I.ad);return(0,S.useEffect)((function(){n((0,A.yF)())}),[n]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(an.ql,{children:(0,Y.jsx)("title",{children:"Your contacts"})}),(0,Y.jsx)("h1",{children:"Phonebook"}),(0,Y.jsx)(R,{}),e&&!r&&(0,Y.jsx)(tn,{}),r&&(0,Y.jsx)($,{}),!r&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)("h2",{children:"Contacts"}),(0,Y.jsx)(en,{}),(0,Y.jsx)(H,{})]})]})}}}]);
//# sourceMappingURL=900.2cd23def.chunk.js.map