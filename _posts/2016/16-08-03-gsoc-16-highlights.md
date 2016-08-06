---
title: 'Google Summer of Code 2016 Highlights'
layout: post
description: 'Post delineates the contributions made to jQuery Mobile during Google Summer of Code 2016'
meta: GSoC 2016 with jQuery Foundation Highlight
tags: [Web, GSoC]
class: post
---

This post lists all the contributions made to jQuery Mobile during Google Summer of Code's coding and bonding period.

__Target__: Summer's aim this year was to bring down the count of open issues on jQuery Mobile Github [repository](https://github.com/jquery/jquery-mobile) from 298 to 75. After the summer comes to end, I will maintain a consistent feedback for any new issues filed on Github.

__Outcome__: As of this writing, current count of open issues on Github is 78.

__Synopsis__

- Most of the issues currently open on Github are related to features and fixes planned for 1.6 version which we will start working upon as soon as we close on 1.5.

- Apart from decreasing the issue count, I have been also working on features and fixes to take steps towards release of version 1.5 which is now in alpha.

- All the issues closed by me during the summer can be found [here](https://github.com/jquery/jquery-mobile/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aclosed%20assignee%3Aapsdehal). You can see that > 200 issues were closed.

- Changes made by me in jQM have landed into the master branch. This involves various fixes from issues, bootstrap and its integration commits and changes for classes option. Commits can be found [here](https://github.com/jquery/jquery-mobile/commits/master?author=apsdehal). I have landed > 150 commits during this summer.

- Sessions with @arschmitz have been really productive. I have discussed about project implementations and issues with him almost everyday of summer.

__Timeline__

- I had started working early on the project during the community bonding period itself due to its gigantic nature (250 issues!)

- I followed a generalized approach to tackle a issue which involved steps mentioned below. If any of the condition failed, I would close the issue or take action accordingly:
	1. Check if the issue is really about a bug in jQM functionality. If it is a question, I would point the issue posted to jQuery forum, irc and SO.
	2. Check if the issue description has sufficient info to reproduce the issue. This involves but is not limited to JSBIn, actual outcome, expected outcome and steps to reproduce. If the issue didn't meet minimum requirements to reproduce, I would close the issue by tagging the issue poster and asking them to provide more information and reopen.
	3. Check if the device/browser the issue poster is using is supported by the latest JQM.
	4. Try to replicate the issue, if the issue doesn't occur anymore, close the issue as not reproducable so the poster can provide more info or can agree with the resolution. Many issues were no longer reproducable as some were 4 years old.
	5. If the issue still exists, discuss with the team about possible solutions and if we want to go forward with fixing it. If we are going to fix the issue, then open a PR with a possible solution.
	6. Wait for the PR to get a +1 review and then land it in current development branch.

- I first started by closing the issues which didn't had a JSBin or other required intel in description.

- Then I resolved super old issues.

- After that, I closed the issues for which platforms were no longer supported.

- I also closed the issues which were not reproducable

- I fixed most of the remaining issues except the ones linked with 1.6.

- Communication during whole summer was done through a mix of IRC and Hangouts.
