(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(10),c=a.n(i),d=a(7),h=a(3),l=a(4),r=a(1),o=a(6),b=a(5),u=a(0),j=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleChange,a=e.firstName,n=e.lastName,s=e.email,i=e.number,c=e.address,d=e.city,h=e.state,l=e.zip,r=e.title;return Object(u.jsxs)("div",{id:"pesonal-info-form-container",children:[Object(u.jsx)("h2",{children:"Personal Information"}),Object(u.jsxs)("div",{className:"pesonal-info-form",children:[Object(u.jsx)("input",{className:"persona-info-input",name:"first-name",placeholder:"First Name",type:"text",onChange:t("firstName"),value:a,required:!0}),Object(u.jsx)("input",{className:"persona-info-input",name:"last-name",placeholder:"Last Name",type:"text",onChange:t("lastName"),value:n,required:!0}),Object(u.jsx)("input",{className:"persona-info-input",name:"email",placeholder:"Email",type:"text",onChange:t("email"),value:s}),Object(u.jsx)("input",{className:"persona-info-input",name:"phone",placeholder:"Phone Number",type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",onChange:t("number"),value:i,required:!0})]}),Object(u.jsxs)("div",{className:"pesonal-info-form",children:[Object(u.jsx)("input",{className:"persona-info-input",name:"address",placeholder:"Address",type:"text",onChange:t("address"),value:c,required:!0}),Object(u.jsx)("input",{className:"persona-info-input",name:"city",placeholder:"City",type:"text",onChange:t("city"),value:d,required:!0}),Object(u.jsx)("input",{className:"persona-info-input",name:"state",placeholder:"State",type:"text",onChange:t("state"),value:h,required:!0}),Object(u.jsx)("input",{className:"persona-info-input",name:"zip",placeholder:"Zip",type:"text",onChange:t("zip"),value:l,required:!0}),Object(u.jsx)("input",{name:"title",placeholder:"Title",type:"text",id:"persona-info-title",onChange:t("title"),value:r,required:!0})]})]})}}]),a}(n.Component),m=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleChange,a=e.objective;return Object(u.jsxs)("div",{id:"resume-obj-container",children:[Object(u.jsx)("h2",{children:"Resume objective"}),Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{name:"objective",placeholder:"Summarize your career goals",onChange:t("objective"),value:a,required:!0})})]})}}]),a}(n.Component),p=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return function(t){n.setState(Object(d.a)({},e,t.target.value))}},n.state={title:"",company:"",from:"",to:"",toDate:"",activities:"",jobs:[],jobArr:[],checked:!1,submitted:!1},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handlePresentDate=n.handlePresentDate.bind(Object(r.a)(n)),n.handlePushArr=n.handlePushArr.bind(Object(r.a)(n)),n.handleAdd=n.handleAdd.bind(Object(r.a)(n)),n.handleDelete=n.handleDelete.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handlePushArr",value:function(){var e=this.state.jobs;(0,this.props.handleJobObjects)(e)}},{key:"handleAdd",value:function(){var e=this,t=this.state,a={title:t.title,company:t.company,from:t.from,to:t.to,activities:t.activities,checked:t.checked,submitted:t.submitted},n=[];n.push(a),this.setState({jobs:n},(function(){e.handlePushArr()}))}},{key:"handleDelete",value:function(){var e=this.props;(0,e.handleRemoveJob)(e.index)}},{key:"handleSubmit",value:function(){var e=this;this.setState({submitted:!0},(function(){e.handleAdd()}))}},{key:"handlePresentDate",value:function(e){e.target.checked?this.setState({toDate:this.state.to,to:"Present",checked:!0}):this.setState({to:this.state.toDate,checked:!1})}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.company,n=e.from,s=e.to,i=e.activities,c=e.checked,d=e.submitted;return Object(u.jsxs)("div",{className:"experience-form",children:[Object(u.jsx)("input",{name:"title",placeholder:"Title",type:"text",className:"experience-fields",value:t,onChange:this.handleChange("title"),disabled:void 0===d?this.state.submitted:d,required:!0}),Object(u.jsx)("input",{name:"company-name",placeholder:"Company",type:"text",className:"experience-fields",value:a,onChange:this.handleChange("company"),disabled:void 0===d?this.state.submitted:d,required:!0}),Object(u.jsx)("input",{placeholder:"From:",type:"date",className:"experience-fields from-date",value:n,onChange:this.handleChange("from"),disabled:void 0===d?this.state.submitted:d,required:!0}),Object(u.jsx)("input",{placeholder:"To:",type:"date",className:"experience-fields to-date",value:"Present"===s?"":s,onChange:this.handleChange("to"),disabled:!!this.state.submitted||(!!this.state.checked||!!d),required:!0}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",className:"toggle-ongoing",onChange:this.handlePresentDate,disabled:void 0===d?this.state.submitted:d,checked:void 0===c?this.state.checked:c}),Object(u.jsx)("span",{className:"slider round",children:"Present"})]}),Object(u.jsx)("textarea",{name:"activities",placeholder:"Activities & Responsiblities",value:i,onChange:this.handleChange("activities"),disabled:void 0===d?this.state.submitted:d,required:!0}),!1===this.state.submitted&&void 0===d?Object(u.jsxs)("div",{children:[Object(u.jsxs)("button",{type:"button",className:"submit-job",onClick:this.handleSubmit,children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-plus"})}),"Submit"]}),Object(u.jsx)("button",{type:"button",className:"cancel",onClick:this.handleDelete,children:"Cancel"})]}):Object(u.jsx)("button",{type:"button",className:"delete",onClick:this.handleDelete,children:"Delete"})]})}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={jobInputs:n.props.experience,jobsObj:[],arr:[]},n.handleAddJobs=n.handleAddJobs.bind(Object(r.a)(n)),n.handleConcatJobToArr=n.handleConcatJobToArr.bind(Object(r.a)(n)),n.handleJobObjects=n.handleJobObjects.bind(Object(r.a)(n)),n.handlePushArr=n.handlePushArr.bind(Object(r.a)(n)),n.handleRemoveJob=n.handleRemoveJob.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handleAddJobs",value:function(e){var t=this.state.jobInputs;t.push(1),this.setState({jobInputs:t})}},{key:"handleRemoveJob",value:function(e){var t=this,a=this.state.jobInputs;a.splice(e,1),this.setState({jobInputs:a,jobsObj:a},(function(){t.handlePushArr()}))}},{key:"handlePushArr",value:function(){var e=this.state.jobsObj;(0,this.props.handleExperienceChange)(e)}},{key:"handleConcatJobToArr",value:function(){var e=this,t=this.state,a=t.jobsObj,n=t.arr;this.setState({jobsObj:a.concat(n)},(function(){e.handlePushArr()}))}},{key:"handleJobObjects",value:function(e){var t=this;this.setState({arr:e},(function(){t.handleConcatJobToArr()}))}},{key:"render",value:function(){var e=this,t=this.state.jobInputs;return Object(u.jsxs)("div",{id:"experience-container",children:[Object(u.jsx)("h2",{children:"Experience"}),t.map((function(t,a){return Object(u.jsx)(p,{index:a,handleJobObjects:e.handleJobObjects,handleRemoveJob:e.handleRemoveJob,title:t.title,company:t.company,from:t.from,to:t.to,activities:t.activities,checked:t.checked,submitted:t.submitted},a)})),Object(u.jsxs)("button",{type:"button",id:"add-experience-button",onClick:this.handleAddJobs,children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-plus"})}),"Add"]})]})}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return function(t){n.setState(Object(d.a)({},e,t.target.value))}},n.state={schoolName:"",degree:"",from:"",to:"",toDate:"",schools:[],schoolArr:[],checked:!1,submitted:!1},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handlePresentDate=n.handlePresentDate.bind(Object(r.a)(n)),n.handlePushArr=n.handlePushArr.bind(Object(r.a)(n)),n.handleAdd=n.handleAdd.bind(Object(r.a)(n)),n.handleDelete=n.handleDelete.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handlePushArr",value:function(){var e=this.state.schools;(0,this.props.handleSchoolObjects)(e)}},{key:"handleAdd",value:function(){var e=this,t=this.state,a={schoolName:t.schoolName,degree:t.degree,from:t.from,to:t.to,checked:t.checked,submitted:t.submitted},n=[];n.push(a),this.setState({schools:n},(function(){e.handlePushArr()}))}},{key:"handleDelete",value:function(){var e=this.props;(0,e.handleRemoveSchool)(e.index)}},{key:"handleSubmit",value:function(){var e=this;this.setState({submitted:!0},(function(){e.handleAdd()}))}},{key:"handlePresentDate",value:function(e){e.target.checked?this.setState({toDate:this.state.to,to:"Present",checked:!0}):this.setState({to:this.state.toDate,checked:!1})}},{key:"render",value:function(){var e=this.props,t=e.schoolName,a=e.degree,n=e.from,s=e.to,i=e.checked,c=e.submitted;return Object(u.jsxs)("div",{className:"education-form",children:[Object(u.jsxs)("div",{className:"education-form",children:[Object(u.jsx)("input",{name:"school",placeholder:"Name of school or organization",type:"text",className:"education-input",value:t,onChange:this.handleChange("schoolName"),disabled:void 0===c?this.state.submitted:c}),Object(u.jsx)("input",{name:"degree",placeholder:"Degree title",type:"text",className:"education-input",value:a,onChange:this.handleChange("degree"),disabled:void 0===c?this.state.submitted:c}),Object(u.jsx)("input",{name:"from-date",placeholder:"From:",type:"date",className:"education-input from-date",value:n,onChange:this.handleChange("from"),disabled:void 0===c?this.state.submitted:c}),Object(u.jsx)("input",{name:"to-date",placeholder:"To:",type:"date",className:"to-date",value:"Present"===s?"":s,onChange:this.handleChange("to"),disabled:!!this.state.submitted||(!!this.state.checked||!!c)}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",className:"toggle-ongoing",onChange:this.handlePresentDate,disabled:void 0===c?this.state.submitted:c,checked:void 0===i?this.state.checked:i}),Object(u.jsx)("span",{className:"slider round",children:"Present"})]})]}),!1===this.state.submitted&&void 0===c?Object(u.jsxs)("div",{children:[Object(u.jsxs)("button",{type:"button",className:"submit-school",onClick:this.handleSubmit,children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-plus"})}),"Submit"]}),Object(u.jsx)("button",{type:"button",className:"cancel",onClick:this.handleDelete,children:"Cancel"})]}):Object(u.jsx)("button",{type:"button",className:"delete",onClick:this.handleDelete,children:"Delete"})]})}}]),a}(n.Component),f=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={schoolInputs:n.props.education,schoolObj:[],arr:[]},n.handleAddSchools=n.handleAddSchools.bind(Object(r.a)(n)),n.handleConcatSchoolToArr=n.handleConcatSchoolToArr.bind(Object(r.a)(n)),n.handleSchoolObjects=n.handleSchoolObjects.bind(Object(r.a)(n)),n.handlePushArr=n.handlePushArr.bind(Object(r.a)(n)),n.handleRemoveSchool=n.handleRemoveSchool.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handleAddSchools",value:function(e){var t=this.state.schoolInputs;t.push(1),this.setState({schoolInputs:t})}},{key:"handleRemoveSchool",value:function(e){var t=this,a=this.state.schoolInputs;a.splice(e,1),this.setState({schoolInputs:a,schoolObj:a},(function(){t.handlePushArr()}))}},{key:"handlePushArr",value:function(){var e=this.state.schoolObj;(0,this.props.handleEducationChange)(e)}},{key:"handleConcatSchoolToArr",value:function(){var e=this,t=this.state,a=t.schoolObj,n=t.arr;this.setState({schoolObj:a.concat(n)},(function(){e.handlePushArr()}))}},{key:"handleSchoolObjects",value:function(e){var t=this;this.setState({arr:e},(function(){t.handleConcatSchoolToArr()}))}},{key:"render",value:function(){var e=this,t=this.state.schoolInputs;return Object(u.jsxs)("div",{id:"education-container",children:[Object(u.jsx)("h2",{children:"Education"}),t.map((function(t,a){return Object(u.jsx)(v,{index:a,handleRemoveSchool:e.handleRemoveSchool,handleSchoolObjects:e.handleSchoolObjects,schoolName:t.schoolName,degree:t.degree,from:t.from,to:t.to,checked:t.checked,submitted:t.submitted},a)})),Object(u.jsxs)("button",{type:"button",id:"add-education-button",onClick:this.handleAddSchools,children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-plus"})}),"Add"]})]})}}]),a}(n.Component),x=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return function(t){n.setState(Object(d.a)({},e,t.target.value))}},n.state={name:"",date:"",certs:[],checked:!1,submitted:!1},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handlePushArr=n.handlePushArr.bind(Object(r.a)(n)),n.handleAdd=n.handleAdd.bind(Object(r.a)(n)),n.handleDelete=n.handleDelete.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handlePushArr",value:function(){var e=this.state.certs;(0,this.props.handleCertsObjects)(e)}},{key:"handleAdd",value:function(){var e=this,t=this.state,a={name:t.name,date:t.date,submitted:t.submitted},n=[];n.push(a),this.setState({certs:n},(function(){e.handlePushArr()}))}},{key:"handleDelete",value:function(){var e=this.props;(0,e.handleRemoveCert)(e.index)}},{key:"handleSubmit",value:function(){var e=this;this.setState({submitted:!0},(function(){e.handleAdd()}))}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.date,n=e.submitted;return Object(u.jsxs)("div",{className:"cert-form",children:[Object(u.jsx)("input",{placeholder:"name",type:"text",value:t,disabled:void 0===n?this.state.submitted:n,onChange:this.handleChange("name")}),Object(u.jsx)("input",{placeholder:"Date of completion",type:"date",value:a,disabled:void 0===n?this.state.submitted:n,onChange:this.handleChange("date")}),!1===this.state.submitted&&void 0===n?Object(u.jsxs)("div",{children:[Object(u.jsxs)("button",{type:"button",className:"submit-cert",onClick:this.handleSubmit,children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-plus"})}),"Submit"]}),Object(u.jsx)("button",{type:"button",className:"cancel",onClick:this.handleDelete,children:"Cancel"})]}):Object(u.jsx)("button",{type:"button",className:"delete",onClick:this.handleDelete,children:"Delete"})]})}}]),a}(n.Component),C=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={certInputs:n.props.certification,certObj:[],arr:[]},n.handleAddCerts=n.handleAddCerts.bind(Object(r.a)(n)),n.handleConcatCertsToArr=n.handleConcatCertsToArr.bind(Object(r.a)(n)),n.handleCertsObjects=n.handleCertsObjects.bind(Object(r.a)(n)),n.handlePushArr=n.handlePushArr.bind(Object(r.a)(n)),n.handleRemoveCert=n.handleRemoveCert.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handleAddCerts",value:function(e){var t=this.state.certInputs;t.push(1),this.setState({certInputs:t})}},{key:"handlePushArr",value:function(){var e=this.state.certObj;(0,this.props.handleCertificationChange)(e)}},{key:"handleConcatCertsToArr",value:function(){var e=this,t=this.state,a=t.certObj,n=t.arr;this.setState({certObj:a.concat(n)},(function(){e.handlePushArr()}))}},{key:"handleCertsObjects",value:function(e){var t=this;this.setState({arr:e},(function(){t.handleConcatCertsToArr()}))}},{key:"handleRemoveCert",value:function(e){var t=this,a=this.state.certInputs;a.splice(e,1),this.setState({certInputs:a,certObj:a},(function(){t.handlePushArr()}))}},{key:"render",value:function(){var e=this,t=this.state.certInputs;return Object(u.jsxs)("div",{id:"cert-container",children:[Object(u.jsx)("h2",{children:"Licenses & Certificates"}),t.map((function(t,a){return Object(u.jsx)(x,{index:a,handleCertsObjects:e.handleCertsObjects,handleRemoveCert:e.handleRemoveCert,name:t.name,date:t.date,submitted:t.submitted},a)})),Object(u.jsxs)("button",{type:"button",id:"add-education-button",onClick:this.handleAddCerts,children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-plus"})}),"Add"]})]})}}]),a}(n.Component),y=a(8),g=a.n(y),k=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handleClick",value:function(){(0,this.props.handleEdit)()}},{key:"render",value:function(){var e=this.props,t=e.firstName,a=e.lastName,n=e.email,s=e.number,i=e.address,c=e.city,d=e.state,h=e.zip,l=e.objective,r=e.title,o=e.experience,b=e.education,j=e.certification;return Object(u.jsxs)("div",{id:"resume-container",children:[Object(u.jsxs)("header",{id:"header",children:[Object(u.jsxs)("h1",{id:"name",children:[t," ",a]}),Object(u.jsx)("div",{className:"divider"}),Object(u.jsx)("div",{id:"title",children:r}),Object(u.jsx)("button",{type:"button",className:"edit",onClick:this.handleClick,children:Object(u.jsx)("i",{className:"fas fa-edit"})})]}),Object(u.jsxs)("main",{id:"main",children:[Object(u.jsxs)("div",{id:"col-1",children:[Object(u.jsx)("div",{id:"objective",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"category",children:"Resume Objective"}),Object(u.jsx)("p",{children:l})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"category",children:"EXPERIENCE"}),Object(u.jsx)("div",{children:o.map((function(e){return Object(u.jsxs)("div",{className:"jobs",children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("h4",{children:[e.company," / ",e.from," - ",e.to]}),Object(u.jsx)("p",{children:e.activities})]},g()())}))})]})]}),Object(u.jsxs)("div",{id:"col-2",children:[Object(u.jsxs)("div",{id:"info-container",children:[Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("i",{className:"fas fa-envelope info-icon"}),Object(u.jsx)("p",{children:n})]}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("i",{className:"fas fa-phone info-icon"}),Object(u.jsx)("p",{children:s})]}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("i",{className:"fas fa-map-marker-alt info-icon"}),Object(u.jsxs)("p",{children:[i,", ",c," ",d," ",h]})]})]}),Object(u.jsxs)("div",{className:"education-container",children:[Object(u.jsx)("h2",{className:"category",children:"EDUCATION"}),b.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.schoolName}),Object(u.jsx)("p",{children:e.degree}),Object(u.jsxs)("p",{children:[e.from," - ",e.to]})]},g()())}))]}),Object(u.jsxs)("div",{id:"certification-container",children:[Object(u.jsx)("h2",{className:"category",children:"LICENSES & CERTIFICATES"}),j.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:e.name}),Object(u.jsx)("p",{children:e.date})]},g()())}))]})]})]})]})}}]),a}(n.Component),N=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleChange=function(t){return function(a){e.setState(Object(d.a)({},t,a.target.value))}},e.state={firstName:"",lastName:"",email:"",number:"",address:"",city:"",state:"",zip:"",title:"",objective:"",experience:[],education:[],certification:[],submitted:!1},e.handleChange=e.handleChange.bind(Object(r.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(r.a)(e)),e.handleEdit=e.handleEdit.bind(Object(r.a)(e)),e.handleExperienceChange=e.handleExperienceChange.bind(Object(r.a)(e)),e.handleEducationChange=e.handleEducationChange.bind(Object(r.a)(e)),e.handleCertificationChange=e.handleCertificationChange.bind(Object(r.a)(e)),e}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0})}},{key:"handleEdit",value:function(){this.setState({submitted:!1})}},{key:"handleExperienceChange",value:function(e){this.setState({experience:e})}},{key:"handleEducationChange",value:function(e){this.setState({education:e})}},{key:"handleCertificationChange",value:function(e){this.setState({certification:e})}},{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,s=e.number,i=e.address,c=e.city,d=e.state,h=e.zip,l=e.title,r=e.objective,o=e.experience,b=e.education,p=e.certification,v=e.submitted;return Object(u.jsx)("div",{className:"App",children:v?Object(u.jsx)(k,{firstName:t,lastName:a,email:n,number:s,address:i,city:c,state:d,zip:h,objective:r,title:l,experience:o,education:b,certification:p,handleEdit:this.handleEdit}):Object(u.jsxs)("form",{id:"form",onSubmit:this.handleSubmit,children:[Object(u.jsx)(j,{handleChange:this.handleChange,firstName:t,lastName:a,email:n,number:s,address:i,city:c,state:d,zip:h,title:l}),Object(u.jsx)(m,{handleChange:this.handleChange,objective:r}),Object(u.jsx)(O,{handleExperienceChange:this.handleExperienceChange,experience:o}),Object(u.jsx)(f,{handleEducationChange:this.handleEducationChange,education:b}),Object(u.jsx)(C,{handleCertificationChange:this.handleCertificationChange,certification:p}),Object(u.jsx)("div",{id:"submit-container",children:Object(u.jsx)("input",{type:"submit",id:"submit"})})]})})}}]),a}(n.Component);c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.90e7fa07.chunk.js.map