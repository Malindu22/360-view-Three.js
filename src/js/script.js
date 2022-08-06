const panorama = new PANOLENS.ImagePanorama( './assets/img.jpg' );
let viewer = new PANOLENS.Viewer({
    autoHideControlBar: true,
    autoHideInfospot: false, 
    output: 'console',
    dwellTime: 1000
});

const infospot = new PANOLENS.Infospot(300, './assets/small.png');
infospot.position.set( 5000, 203, -636 );
infospot.addHoverText( 'Out Side', 30 );
panorama.add( infospot );

const infospot2 = new PANOLENS.Infospot();
infospot2.position.set( 5000, -263, 1236 );
infospot2.addHoverText( 'Next', 30 );
panorama.add( infospot2 );

viewer.add( panorama );

infospot2.addEventListener('click',() => {
    infospot2.unlockHoverElement()
    viewer.remove( panorama );
    const newpanorama = new PANOLENS.ImagePanorama( './assets/img1.jpg' );
    viewer.add( newpanorama );
    viewer.setPanorama( newpanorama );
});

document.addEventListener('click',() => {
    let clickedPos = viewer.getPosition();
    console.log("data", clickedPos)
});
