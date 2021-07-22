(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(8),l=(n(0),n(346)),b={id:"entryAnimations",title:"Entering Animations",sidebar_label:"Entering Animations"},o={unversionedId:"api/LayoutAnimations/entryAnimations",id:"api/LayoutAnimations/entryAnimations",isDocsHomePage:!1,title:"Entering Animations",description:"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view.",source:"@site/docs/api/LayoutAnimations/EntryAnimations.md",slug:"/api/LayoutAnimations/entryAnimations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/entryAnimations",version:"current",sidebar_label:"Entering Animations",sidebar:"docs",previous:{title:"Custom Animations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/customAnimations"},next:{title:"Exiting Animations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/exitAnimations"}},r=[{value:"How to use predefined entering animation?",id:"how-to-use-predefined-entering-animation",children:[{value:"1. Import chosen animation",id:"1-import-chosen-animation",children:[]},{value:"2. Choose Animated Component which entering you want to animate",id:"2-choose-animated-component-which-entering-you-want-to-animate",children:[]},{value:"3. Customize the animation",id:"3-customize-the-animation",children:[]},{value:"4. Make sure that your animated component is under an AnimatedLayout. If it&#39;s not then add AnimatedLayout somewhere above the component.",id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component",children:[]}]},{value:"Predefined Animations",id:"predefined-animations",children:[{value:"Fade",id:"fade",children:[]},{value:"Bounce",id:"bounce",children:[]},{value:"Flip",id:"flip",children:[]},{value:"Stretch",id:"stretch",children:[]},{value:"Zoom",id:"zoom",children:[]},{value:"Slide",id:"slide",children:[]},{value:"LightSpeed",id:"lightspeed",children:[]},{value:"Pinwheel",id:"pinwheel",children:[]},{value:"Roll",id:"roll",children:[]},{value:"Rotate",id:"rotate",children:[]}]}],c={toc:r};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view."),Object(l.b)("p",null,"We provide an easy API that allows you to code almost any animation you want. Because some of the animations are more frequently used than the others we coded them for you and provided in an accessible way. Below you can find an instruction step by step explaining how to use them. A little further down you will find a detailed description of all the predefined entering animations."),Object(l.b)("p",null,"If you want to create more complex animation you can use ",Object(l.b)("a",{parentName:"p",href:"keyframeAnimations"},"Keyframes"),"."),Object(l.b)("h2",{id:"how-to-use-predefined-entering-animation"},"How to use predefined entering animation?"),Object(l.b)("h3",{id:"1-import-chosen-animation"},"1. Import chosen animation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// AnimationName is just an example and should be replaced by real animation. For Instance FadeIn\nimport { AnimationName } from 'react-native-reanimated'; \n")),Object(l.b)("h3",{id:"2-choose-animated-component-which-entering-you-want-to-animate"},"2. Choose Animated Component which entering you want to animate"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n<AnimatedComponent entering={AnimationName} > \n")),Object(l.b)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),Object(l.b)("p",null,"Different type of entering animations can be customized differently. For the complete list of option please refer to the paragraph specific to the particulr animation type."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<AnimatedComponent entering={AnimationName.duration(3000).otherModifier()} >\n")),Object(l.b)("h3",{id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component"},"4. Make sure that your animated component is under an AnimatedLayout. If it's not then add AnimatedLayout somewhere above the component."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<AnimatedLayout> // +\n    <View> sth </View>\n    <View> \n        <AnimatedComponent entering={AnimationName}>\n    </View>\n</AnimatedLayout> // +\n")),Object(l.b)("h2",{id:"predefined-animations"},"Predefined Animations"),Object(l.b)("p",null,"Below we listed all of the currently available predefined entering animations grouped by their type. Each group contains all of its modifiers and a video presenting what it looks like when applied to a simple button."),Object(l.b)("p",null,"If you cannot find an animation that suits you then you can create a custom one. If you think that the animation should be here, please open an issue or create a pull request. "),Object(l.b)("h3",{id:"fade"},"Fade"),Object(l.b)("p",null,"Simple animation based on changing of opacity."),Object(l.b)("h4",{id:"animations"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"FadeIn"),Object(l.b)("li",{parentName:"ul"},"FadeInRight"),Object(l.b)("li",{parentName:"ul"},"FadeInLeft"),Object(l.b)("li",{parentName:"ul"},"FadeInUp"),Object(l.b)("li",{parentName:"ul"},"FadeInDown")),Object(l.b)("h4",{id:"modifiers"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317260-b3ccbe00-c2de-11eb-8434-8998b12dfa3c.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"bounce"},"Bounce"),Object(l.b)("p",null,"Animation based on smoothly shaking of component."),Object(l.b)("h4",{id:"animations-1"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BounceIn"),Object(l.b)("li",{parentName:"ul"},"BounceInRight"),Object(l.b)("li",{parentName:"ul"},"BounceInLeft"),Object(l.b)("li",{parentName:"ul"},"BounceInUp"),Object(l.b)("li",{parentName:"ul"},"BounceInDown")),Object(l.b)("h4",{id:"modifiers-1"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-1"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317341-cc3cd880-c2de-11eb-9d72-4065c740667e.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"flip"},"Flip"),Object(l.b)("p",null,"3D animation based on flipping object over specific axis."),Object(l.b)("h4",{id:"animations-2"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"FlipInYRight"),Object(l.b)("li",{parentName:"ul"},"FlipInYLeft"),Object(l.b)("li",{parentName:"ul"},"FlipInXUp"),Object(l.b)("li",{parentName:"ul"},"FlipInXDown"),Object(l.b)("li",{parentName:"ul"},"FlipInEasyX"),Object(l.b)("li",{parentName:"ul"},"FlipInEasyY")),Object(l.b)("h4",{id:"modifiers-2"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-2"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317406-deb71200-c2de-11eb-8dee-c658a4e1e47a.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"stretch"},"Stretch"),Object(l.b)("p",null,"Animation based on changing width or height of object."),Object(l.b)("h4",{id:"animations-3"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"StretchInX"),Object(l.b)("li",{parentName:"ul"},"StretchInY")),Object(l.b)("h4",{id:"modifiers-3"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-3"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317473-f42c3c00-c2de-11eb-8772-b366c2ddde7f.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"zoom"},"Zoom"),Object(l.b)("p",null,"Animation based on changing scale of object."),Object(l.b)("h4",{id:"animations-4"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ZoomIn"),Object(l.b)("li",{parentName:"ul"},"ZoomInRotate"),Object(l.b)("li",{parentName:"ul"},"ZoomInRight"),Object(l.b)("li",{parentName:"ul"},"ZoomInLeft"),Object(l.b)("li",{parentName:"ul"},"ZoomInUp"),Object(l.b)("li",{parentName:"ul"},"ZoomInDown"),Object(l.b)("li",{parentName:"ul"},"ZoomInEasyUp"),Object(l.b)("li",{parentName:"ul"},"ZoomInEadyDown")),Object(l.b)("h4",{id:"modifiers-4"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-4"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317529-04441b80-c2df-11eb-9627-c56e986e44c1.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"slide"},"Slide"),Object(l.b)("p",null,"Animation based on horizontal or vertical moving of object."),Object(l.b)("h4",{id:"animations-5"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SlideInRight"),Object(l.b)("li",{parentName:"ul"},"SlideInLeft"),Object(l.b)("li",{parentName:"ul"},"SlideInUp"),Object(l.b)("li",{parentName:"ul"},"SlideInDown")),Object(l.b)("h4",{id:"modifiers-5"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-5"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317587-1a51dc00-c2df-11eb-937a-c53a237afca2.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"lightspeed"},"LightSpeed"),Object(l.b)("p",null,"Animation based on horizontal moving of object with changing of opacity and skew."),Object(l.b)("h4",{id:"animations-6"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"LightSpeedInRight"),Object(l.b)("li",{parentName:"ul"},"LightSpeedInLeft")),Object(l.b)("h4",{id:"modifiers-6"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-6"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/48885911/125057634-c094bc80-e0a9-11eb-98d9-0c8eed1e63b0.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"pinwheel"},"Pinwheel"),Object(l.b)("p",null,"Animation based on rotation with scale and opacity change."),Object(l.b)("h4",{id:"animations-7"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PinwheelIn")),Object(l.b)("h4",{id:"modifiers-7"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-7"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/48885911/125058126-40228b80-e0aa-11eb-8396-7f373af7fcbe.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"roll"},"Roll"),Object(l.b)("p",null,"Animation based on horizontal moving of object with rotation."),Object(l.b)("h4",{id:"animations-8"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RollInLeft"),Object(l.b)("li",{parentName:"ul"},"RollInRight")),Object(l.b)("h4",{id:"modifiers-8"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-8"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/48885911/125058243-60524a80-e0aa-11eb-94c8-79728688e2f3.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"rotate"},"Rotate"),Object(l.b)("p",null,"Animation based on rotation of object."),Object(l.b)("h4",{id:"animations-9"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RotateInDownLeft"),Object(l.b)("li",{parentName:"ul"},"RotateInDownRight"),Object(l.b)("li",{parentName:"ul"},"RotateInUpLeft"),Object(l.b)("li",{parentName:"ul"},"RotateInUpRight")),Object(l.b)("h4",{id:"modifiers-9"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends")),Object(l.b)("h4",{id:"example-9"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/48885911/125058359-79f39200-e0aa-11eb-8c78-c31e461e3748.mov",controls:"controls",muted:"muted"}))}m.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,s=d["".concat(b,".").concat(u)]||d[u]||p[u]||l;return n?i.a.createElement(s,o(o({ref:t},c),{},{components:n})):i.a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var c=2;c<l;c++)b[c]=n[c];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);