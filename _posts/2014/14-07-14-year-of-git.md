---
title: 'Year of Git and 1000th commit'
layout: post
description: 'Today, I pushed my 1000th commit to Github, irony is, exactly one year before I pushed my first commit to Github. Its kind of like an exciting thing in itself. Well, this was such a terrific year in itself. I still remember pushing my first'
meta: Git and me
tags: [Web, Git, Learning] 
class: post
---
Today, I pushed my 1000th commit to Github, irony is, exactly one year before I pushed my first commit to Github. Its kind of like an exciting thing in itself. Well, this was such a terrific year in itself. I still remember pushing my first commit to [apsdehal/RD](https://github.com/apsdehal/RD) for Roorkee Delivers (a startup for which I made my first website), through Windows Github software :). I had an awful exprience while doing this as in most cases git is totally a blast for a newcomer, everything goes above the head in a single blow.

Ask me now, life without Git and Github is just unimaginable. Git has saved me an awful number of times throughout all my experience of software development. IMO, Git is a totally worth a shot to give at. Learn it, and you can take your skills to a whole new level. Remembering Git, last year when I was targeting towards getting GSoC and SDSLabs, I came to talk to Abhishek Das and he told me that first thing to learn is Git, I got somewhat into it, but not fully. It was time in winter vacations when I started contributing to MediaWiki and Moodle that I took my Git skills to all new levels. This showed, the best teacher for you is really you. Even though former statement goes great everywhere, but in this case it just fits great. 

Check out Stack Overflow when you are in any kind of problem. The first video that truly gave me some understanding about Git in 60 minutes by Scott Chacon (guy is really great), also checkout his book about git, thats awesome too (links belows).

So let me get you straight through some basics of Git so that I can really make this post useful for those who are reading it till now.

### What is Git?

> Git is a version control software

I will explain this in the layman language. Ever seen the different vesions of Windows like 7 and 8, just imagine that Git helps you having a control on different vesions like these for a particular software. Git helps you easily switch back and forth between them, make changes, even switch between these changes. Just for a better scene, think of Git as a camera that takes a snapshot of how your code looks like for the moment when you call a certain command, and that you can easily switch back and check this snapshot when ever you want.

### What is Github?

> GitHub is the best place to build software together

We just talked about snapshots via Git, now just wonder that you can share these snapshots with other people, cool it would be. Now these people whom with you are sharing code are called collaborators, they can make their own changes and then take snapshots and again share it with you. This way people can code together and make great software. Now Github is the website where you can share all these snapshots, add collaborators, issues and much more.

### What is a commit?

> Commit is a snapshot or a version of your code

Now the snapshot we were talking all the way long is called commit in Git language. We commit commits :), adds a message description about what we changed and push these commits to Github. Now your collaborators pull these commits and makes their changes, commit them and push them back and then you pull these commits and thats how cycle goes on.

### Where do I start?

You start right here, right at moment I will cover up the basics of Git in this blog post.

### Commands: 
- **git init**

This command is used to intialize version control on a software. From now on, I will call software a repository. Now go to the directory through command line where your repository is. Now enter

```
git init
```
This will initialize version control there.

- **git add**

This command is used to add content for a commit (snapshot). For adding a whole repository code to a snapshot you can use

```
git add .
```
This will add all the current live changes made after the previous snapshot to stage for next commit (snapshot).

- **git commit**

This is used to create a snapshot of current live changes added by using `git add`, this will prompt for a Commit Message. You should always try to explain what you changed in this new commit by giving a description. Good commit messages are spirits of great softwares. You can always amend this message for the previous commit using `git commit --amend` .

- **git push and git remote**

In Gitlang we call server which host Git repos as remotes such as Github. Now you can follow the instruction in pics below to create a git repo at Github.

Find this option in top right corner after creating an account on Github.

![New Repo](/assets/img/posts/new_repo.jpg)

On the next page add the repository name, description, set it public, and initialize without README, create it and you are ready to go. 

Copy the link in the pic as shown below

![Clone](/assets/img/posts/clone_link.jpg) 

Now let your Git repository know where your remote is by using

```
git remote add origin "link you copied (without commas)"
```
You can push your snapshots for world now by using 

```
git push origin master
```
which pushes your commits to your Github remote repository. I will explain **master** soon.

- **git pull**

Now suppose somebody has your repo (I will explain how to get repos soon), they have a write access, and they push to your repo. You can pull their changes by using 

```
git pull origin master
```
You can also use `fetch` command to be safe but thats outside the scope of the article.

- **git clone**

Suppose you want to contribute to someone's repo, if you have write access you can simple clone and push to that repo. If not, you should fork that repo on Github, then clone that fork, push to it and finally file a Pull Request, deep explaining of which is outside the scope of this article. To clone a repo use its url as used in adding remote and

```
git clone "link you copied (without quotes)" "destination folder (without quotes)"
```
This will create a whole new repo in which you can commit, push directly or file Pull Requests after pushing.

- **git branch and checkout**

Imagine you want to test or add a new cool feature for your repository, but don't want to make changes in original one, you can create branches to do that. Branches have name, and `master` is the base one (it can be renamed). For creating a new branch

```
git branch "branchname (without quotes)"
```
This will create a new branch. You can shift to that branch by

```
git checkout "branchname (without quotes)"
```
There is another command to create a branch and shift to it simultaneously

```
git checkout -b "branchname (without quotes)"
```
You can always list your branches by 

```
git branch
```

### Where to now?

This is more than enough to get you started, I have almost covered up all of the most used commands in Git. For further reading you can use these resources:

- [Scott Chacon's Git in 60 minutes](https://www.youtube.com/watch?v=ZDR433b0HJY)
- [Pro Git book](http://git-scm.com/book)
- [Awesome git shortcuts](https://github.com/ndbroadbent/scm_breeze)