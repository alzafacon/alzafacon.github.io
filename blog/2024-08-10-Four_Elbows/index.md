---
authors: alzafacon
---

#  Plumbing: Connect 2 pipes with 4 elbows

The underground PVC water pipes outside my home are frequently cracking or leaking at the joints. After making several repairs I turned to reddit for an easier way.

A professional recommended using 4 elbows! Genius! The joint is assembled by sliding the top part into the bottom 2 elbows. Instead of having to dig out the pipes enough to bend the pipes to fit couplers on each end.

```
       _____    _____
      |   __====__   |
      |  |2      3|  |
       ||          ||
       ||          ||

____ _|  |1      4|  |_ _____
____|____|        |____|_____

fig. 1
```

But can this technique be applied even if the pipes are skewed?

<!--truncate-->

Of course I want to generalize. I'm just the typical math aficionado. I will attempt a proof by construction.

The critical feature of the 4 elbow joint is that 2 vertical pipes shown below must be parallel (so they can be slid into place).

```
         _____    _____
        |   __====__   |
        |  |2      3|  |
         ||          ||
         ||          ||

fig. 2
```


Here is a simplified drawing with conventional mathematical notation. Pretend it is in three dimensions.

```
        C         D
        *_________*
        |         |
        |         |
<-*-----*         *-----*->
  A'    A         B     B'  

fig. 3  
```

Let there be a plane at point A perpendicular to ->AA' called P.

- This plane includes all points in the rays that a 90 degree "elbow" at point A could draw when rotated.

Now, let there also be a plane at point B perpendicular to ->BB' called Q.

These planes are useful because they get us closer to identifying the orientation of the "vertical" pipes in fig. 2. The reason for this is that each plane contains all of the possible orientations of the pipes independently.

So all we need to find is a line in plane P through point A that is parallel to a line in plane Q through point B. Then it is trivial to select a point C and draw a perpendicular line to a point D as illustrated in fig. 3.

Notice that the planes may either intersect or not. 

1. In the case that the planes do not intersect

    This means the planes are parallel. Which means any line we chose through point A will have a parallel line through point B. So there are infinitely many lines to select and an infinite choice of points C and D. In other words there are infinitely many ways to orient the fitting in fig. 2 by rotating it around the pipes. The length of the "vertical" pipes is the other infinite choice.

2. In the case that the planes intersect

    We can take the line of intersection -call it X- and draw a line parallel to X in plane P through point A. Likewise we can draw a line parallel to X in plane Q through point B.
    By transitivity the line in plane P through point A is parallel to the line in plane Q through point B.
    This time we only have one pair of parallel lines instead of an infinite choice. But there are 2 orientations for the "vertical" pipes as shown in fig. 4 and fig. 5.
    The length of the "vertical" pipes is still an infinite choice.



```
       * 
      / \
     /   \
<---*     \
           * 
          /
         /
        *------>

fig. 4
```


```     
<---*     
   /       
  / 
 *     
  \      
   \     *------>
    \   /
     \ /
      *
      
fig. 5
```

Yes! The 4 elbow technique can always work... in you have enough space.


<!-- Another advantage is that the joints will be straight and without any flexing to weaken the joints.


When pipes are skewed:

Long pipes can get curved when they are laid and buried. So when a cracked section is cut out the remaining ends are slightly skewed.

Joining pipes on a grade change will also cause the pipes to be skewed. -->