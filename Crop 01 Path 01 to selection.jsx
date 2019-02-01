#target photoshop  
displayDialogs = DialogModes.NO

main();  
function main(){  

//Selects a path named "Path 1"
var idslct = charIDToTypeID( "slct" );
    var desc106 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref56 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        ref56.putName( idPath, "Path 1" );
    desc106.putReference( idnull, ref56 );
executeAction( idslct, desc106, DialogModes.NO );

//Loads the selection fropm "Path 1"
var idsetd = charIDToTypeID( "setd" );
    var desc112 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref62 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref62.putProperty( idChnl, idfsel );
    desc112.putReference( idnull, ref62 );
    var idT = charIDToTypeID( "T   " );
        var ref63 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        ref63.putName( idPath, "Path 1" );
    desc112.putReference( idT, ref63 );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc112.putInteger( idVrsn, 1 );
    var idvectorMaskParams = stringIDToTypeID( "vectorMaskParams" );
    desc112.putBoolean( idvectorMaskParams, true );
executeAction( idsetd, desc112, DialogModes.NO );

//load crop
var idslct = charIDToTypeID( "slct" );
    var desc113 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref64 = new ActionReference();
        var idcropTool = stringIDToTypeID( "cropTool" );
        ref64.putClass( idcropTool );
    desc113.putReference( idnull, ref64 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc113.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc113.putBoolean( idforceNotify, true );
executeAction( idslct, desc113, DialogModes.NO );
      

}
