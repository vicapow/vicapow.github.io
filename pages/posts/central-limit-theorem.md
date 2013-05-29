### [Central Limit Theorem Visualized in D3](/posts/central-limit-theorem.html)
May 29, 2013


> In probability theory, the central limit theorem (CLT) states that, given certain conditions, the mean of a sufficiently large number of independent random variables, each with a well-defined mean and well-defined variance, will be approximately normally distributed. 
>
> -- [Central Limit Theorem - Wikipedia](http://en.wikipedia.org/wiki/Central_limit_theorem)

which is what we see here. at every triangle, the ball has a 50/50 shot of going to the left or to the right. you can also think of it like coin flips, where the number of coin flips is `(bins -1)`

if we assign heads, 0, and tails 1 (or 0 for left, 1 for right in the case of the visualization above)

for 1 coin flip, the possible values are:

    0 -> 0
    1 -> 1

so for 1 coin flip, theirs 2 different possible outcomes, each quality likely. the expected percentage of the possible outcomes is than:

    0: 50%
    1: 50%

for 2 coin flips, the possible outcomes are:

    0 + 0 -> 0
    0 + 1 -> 1
    1 + 0 -> 1
    1 + 1 -> 2

so for 2 coin flips, theirs 3 different possible outcomes. But unlike the other outcomes, the outcome where the coins total 1, is possible in two coin combinations so the probably is double in that case. Our expect percentages would than look like:


    0: 25%
    1: 50%
    3: 25%

give it a try!


note: this visualization was inspired by: [http://vis.supstat.com/2013/04/bean-machine/](http://vis.supstat.com/2013/04/bean-machine/)