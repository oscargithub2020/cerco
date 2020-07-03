var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Manz_Vul_Alta_1 = new ol.format.GeoJSON();
var features_Manz_Vul_Alta_1 = format_Manz_Vul_Alta_1.readFeatures(json_Manz_Vul_Alta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manz_Vul_Alta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manz_Vul_Alta_1.addFeatures(features_Manz_Vul_Alta_1);
var lyr_Manz_Vul_Alta_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manz_Vul_Alta_1, 
                style: style_Manz_Vul_Alta_1,
                interactive: true,
                title: '<img src="styles/legend/Manz_Vul_Alta_1.png" /> Manz_Vul_Alta'
            });
var format_Manz_Vul_Med_Alta_2 = new ol.format.GeoJSON();
var features_Manz_Vul_Med_Alta_2 = format_Manz_Vul_Med_Alta_2.readFeatures(json_Manz_Vul_Med_Alta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manz_Vul_Med_Alta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manz_Vul_Med_Alta_2.addFeatures(features_Manz_Vul_Med_Alta_2);
var lyr_Manz_Vul_Med_Alta_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manz_Vul_Med_Alta_2, 
                style: style_Manz_Vul_Med_Alta_2,
                interactive: true,
                title: '<img src="styles/legend/Manz_Vul_Med_Alta_2.png" /> Manz_Vul_Med_Alta'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Manz_Vul_Alta_1.setVisible(true);lyr_Manz_Vul_Med_Alta_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Manz_Vul_Alta_1,lyr_Manz_Vul_Med_Alta_2];
lyr_Manz_Vul_Alta_1.set('fieldAliases', {'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_DANE': 'Manzana', 'CATEGORIA': 'CATEGORIA', 'LABEL': 'Vulnerabilidad', 'ipm': 'ipm', 'HOGAR_GERI': 'Hogar Geriatrico', });
lyr_Manz_Vul_Med_Alta_2.set('fieldAliases', {'COD_DPTO': 'COD_DPTO', 'COD_MPIO': 'COD_MPIO', 'COD_DANE': 'Manzana', 'CATEGORIA': 'CATEGORIA', 'LABEL': 'Vulnerabilidad', 'ipm': 'ipm', });
lyr_Manz_Vul_Alta_1.set('fieldImages', {'COD_DPTO': 'Hidden', 'COD_MPIO': 'Hidden', 'COD_DANE': 'TextEdit', 'CATEGORIA': 'Hidden', 'LABEL': 'TextEdit', 'ipm': 'Hidden', 'HOGAR_GERI': 'TextEdit', });
lyr_Manz_Vul_Med_Alta_2.set('fieldImages', {'COD_DPTO': 'Hidden', 'COD_MPIO': 'Hidden', 'COD_DANE': 'TextEdit', 'CATEGORIA': 'Hidden', 'LABEL': 'TextEdit', 'ipm': 'Hidden', });
lyr_Manz_Vul_Alta_1.set('fieldLabels', {'COD_DANE': 'inline label', 'LABEL': 'no label', 'HOGAR_GERI': 'inline label', });
lyr_Manz_Vul_Med_Alta_2.set('fieldLabels', {'COD_DANE': 'inline label', 'LABEL': 'no label', });
lyr_Manz_Vul_Med_Alta_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});