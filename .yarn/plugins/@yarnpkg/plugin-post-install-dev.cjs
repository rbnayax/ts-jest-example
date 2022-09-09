/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-post-install-dev",
factory: function (require) {
var plugin=(()=>{var a=Object.create,o=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty;var u=t=>o(t,"__esModule",{value:!0});var f=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var g=(t,e)=>{for(var r in e)o(t,r,{get:e[r],enumerable:!0})},k=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of d(e))!p.call(t,s)&&s!=="default"&&o(t,s,{get:()=>e[s],enumerable:!(r=n(e,s))||r.enumerable});return t},P=t=>k(u(o(t!=null?a(l(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var x={};g(x,{default:()=>w});var c=P(f("@yarnpkg/core")),i="postinstallDev",h={hooks:{async afterAllInstalled(t){if(process.env.CI)return;let e=t.topLevelWorkspace.anchoredLocator;if(await c.scriptUtils.hasPackageScript(e,i,{project:t})){let r=await c.scriptUtils.executePackageScript(e,i,[],{project:t,stdin:process.stdin,stdout:process.stdout,stderr:process.stderr});if(r!==0){let s=new Error(`${i} script failed with exit code ${r}`);throw s.stack=void 0,s}}}}},w=h;return x;})();
return plugin;
}
};
