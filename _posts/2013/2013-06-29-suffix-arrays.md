---
title: 'Suffix Arrays'
layout: post
meta: Tutorial by apsdehal
tags: [Algos] 
class: post
---

Recently, I came across the suffix arrays which are a complementary to suffix trees and easier to implement while doing the the LCS question on the spoj the naive algo with complexity O(m*n) is simply unable to pass. So we must apply suffix array to find Longest Common Substring subsequently. SO I googled Suffix Array with finding nohing easy to understand or elseworth simple to write so after much struggle, I have wrote done the code for suffix array in C++, thats easy to understand and implement. Here some theory regarding Suffix Arrays followed by the code

Given a string A = (a0 a1 a2 a3 ....an-1) of length n.<br/>
A suffix of string S starting at position i is Suffix(i) = (ai ai+1 ai+2 ....an-1).<br/>
There are n suffixes of string A ( starting at each index to the end ).

Let U be a set of suffixes of string A in sorted order. ie obtain all the suffixes of A and sort them to form U.

A suffix array S is an array such that S[i] gives the index of Suffix(i) in U.

for example if A = banana
suffixes of A are:<br/>
banana = Suffix(0)<br/>
anana = Suffix(1)<br/>
nana = Suffix(2)<br/>
ana = Suffix(3)<br/>
na = Suffix(4)<br/>
a = Suffix(5)


after sorting U = {<br/>
0 a<br/>
1 ana<br/>
2 anana<br/>
3 banana<br/>
4 na<br/>
5 nana<br/>
}

thus suffix array S would be,<br/>
S = { 3, 2, 5, 1, 4, 0 }

S[1] = 2 because index of  Suffix(1) = anana in U is 2<br/>
Feel free to comment below if you don't understand this.<br/>