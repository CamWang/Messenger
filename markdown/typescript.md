---
layout: post
title: TypeScript Notes
---

# Fundamentals

## Introduction

JavaScript is a language that has a dynamic type system, which means it won't determine what type of value a variable or parameter should hold until it runs to that certain point. As a result, you won't get any sign of many error until you actually meet them during running and that error might be extremely difficult to come across which is absolutely a pain in the ass. Besides, there is a situation when ECMAScript specifies certain buggy behaviors to not throw any error. For example, if you access a none existing property of an object, you will get an `undefined` instead of an error.  
TypeScript introduce static type-checking into the world of JavaScript.