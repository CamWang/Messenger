---
layout: post
title: IoT and Embeded System
date: October 26, 2021
author: Cam
tags: iot uc
---

## Introduction

### Trends of IoT

* Cost of hardware is cheaper over the years - low cost. 
* Computation and network speed is greatly improved - low power, low cost.
* Internet access is available almost everywhere, and Internet can be accessed wirelessly - made IoT devices possible.
* Data cost is fairly low and the bandwidth is high - low cost.

### Embedded Systems

IoT devices usually is just a embedded system with Internet connection.  

Embedded systems are computer-based systems that do not appear to be computers - complexity is hidden from the user. Embedded system is relatively simple to use than computers. Features of embedded systems are:  
* Application specificity - more efficient, focus on one thing and not overly powered instead of doing general computing like computers and smart phones
* Hardware/Software - the hardware and the software of an embedded system usually designed by the same company

Examples of embeded system: 
* Camera - direct interact with human
* Thumb drive - indirect interact with human
* ABS - direct interact with human

Constraints lead to use embedded system:
* Manufacturing cost - embedded systems are cost effective
* Design cost - relatively simple
* Performance - focus on doing on thing right
* Power - more focus less power consumption
* Time-to-market - can be mass produced quickly
* Realiability - can do critical things and very reliable

### Generic Embedded Systems Structure
* Sensors - Receive data from the physical world, Input, Analog Signal
* Analog to Digital Conversion
* Microcontroller
* IP - Intellectual Property, a chip perform a set of functions, cheap in high volumn, deal with common task like network controller, audo/video controller, interact with microcontroller
* FPGA - Field Programmable Gate Array, can be wired to do certain tasks, can be reconfigured
* Digital to Analog Conversion
* Actuators - Cause events in the world, Output, Analog Signal

### Microcontroller
* Slower than a microprocessor
* Transmitted code into a microcontroller memory to run them
* Develop the code on a host and transmitted the compiled version to the memory

Digital Signal Processors
* Made to support DSP functions, process audio 
* Vector instructions
* Cheaper but more limited than general purposed processors like CPU

Sensors
* Receive information from the environment
* Provide simple information, thermister, photoresistor
* Complex sensors like CMOS, ethernet controller

Actuators
* Cause events to occur in the environment
* LED Light-Emitting Diodes, LCD display
* Complex actuators, servo motor, ethernet controller