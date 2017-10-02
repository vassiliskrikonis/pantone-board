# Pantone Board

I had this idea of a color palette using Pantone cards.

Most color palette tools only allow up to 5 or 6 colors. Personally I don't have a clear idea of which colors I'd like to use, so I wanted a tool that allows me to throw a bunch of them on a blank canvas, move them around and pray for the better (no! I don't want to open Photoshop just to draw some colorful blobs!)

*Sigh*... ok... I admit not the most useful idea I've had. Maybe I just needed something to make me try React for once.

**Disclaimer** I'm not affiliated with Pantone LLC in any way.

I used the Pantone colors listed in https://it.labelpartners.com/pantone_coated_table.html

## Features

- Built with `create-react-app`
- Unlimited colors

## Todos
- [ ] Each board is created on-the-fly from it's url
- [ ] Decide if duplicate colors are allowed
- [x] Color picker with Add Color button in a single component
- [ ] ColorPicker should keep the last picked color onClose even if the Add Color button was not pressed
- [ ] Newly created color should be placed on the top of the board
- [ ] Rework or design custom full page color picker with swatches or Pantone color grid
- [ ] On resize, constrain all cards to visible canvas

## Design & Implementation decisions

To drag the color cards around I use `react-draggable`. To always have the moving card on top of the others I just increment it's `z-index` value. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/integer) unless you're planning to drag the cards more than 2<sup>15</sup>-1 times you won't have any issue. Either way, when the browser refreshes the cards will have `z-index: 0` but still show up stacking in the order they are defined (default html behavior).

### Components

```
<App>
  <Board>
    <Color />
  </Board>
  <FloatingActionButton />
  <ColorPicker />
</App>
```

`<App>` is where state resides.

`<Board>` contains only `<Color>` components. These components take a _hex code_ and name, and render out a _color post sticker(?)_.

Since I want the Pantone name be a computed value from the hex code, I think that this logic should be implemented inside the `<App>` component and make the `<Color>` component a dummy, purely representational one. In the end, all logic should be moved back as much and possible and get it implemented at the container level of a self-contained component i.e the top component that will be embeddable.

Right now I don't intend to use the `<App>` component elsewhere, but later on I might decide to make the `<Board>` embeddable with multiple instances. The code should reflect this change in requirements.



## Third-party Libraries

- [Name That Color library](http://chir.ag/projects/ntc/) by [Chirag Mehta](http://chir.ag/about)
