
# Meteor-Readmore

[Readmore.js](https://github.com/jedfoster/Readmore.js) by @jedfoster packaged for Meteor.  

A smooth, responsive jQuery plugin for collapsing and expanding long blocks of text with "Read more" and "Close" links.

The markup Readmore.js requires is so simple, you can probably use it with your existing HTML—there's no need for complicated sets of `div`'s or hardcoded classes, just call `.readmore()` on the element containing your block of text and Readmore.js takes care of the rest. Readmore.js plays well in a responsive environment, too.

## Install

```
meteor add redspear:readmore
```

## Use

For a block of text like this...
```html
<div class="article">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</div>
```

Have this run on the page somewhere.  
```javascript
$('.article').readmore();
```

Putting it in onRendered works well.  
```javascript
Template.TEMPLATENAME.onRendered(function () {
	$('.article').readmore({collapsedHeight: 60});
});
```

It's that simple. You can change the speed of the animation, the height of the collapsed block, and the open and close elements.

```javascript
$('.article').readmore({
  speed: 75,
  lessLink: '<a href="#">Read less</a>'
});
```

### The options:

* `speed: 100` in milliseconds
* `collapsedHeight: 200` in pixels
* `heightMargin: 16` in pixels, avoids collapsing blocks that are only slightly larger than `collapsedHeight`
* `moreLink: '<a href="#">Read more</a>'`
* `lessLink: '<a href="#">Close</a>'`
* `embedCSS: true` insert required CSS dynamically, set this to `false` if you include the necessary CSS in a stylesheet
* `blockCSS: 'display: block; width: 100%;'` sets the styling of the blocks, ignored if `embedCSS` is `false`
* `startOpen: false` do not immediately truncate, start in the fully opened position
* `beforeToggle: function() {}` called after a more or less link is clicked, but *before* the block is collapsed or expanded
* `afterToggle: function() {}` called *after* the block is collapsed or expanded

If the element has a `max-height` CSS property, Readmore.js will use that value rather than the value of the `collapsedHeight` option.

## More Info

Get more info at the [readmore.js github page](https://github.com/jedfoster/Readmore.js)
