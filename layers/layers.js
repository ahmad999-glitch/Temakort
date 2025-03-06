ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1373321.980081, 7478921.692273, 1403113.518957, 7497375.321409]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_kommuneplan_1 = new ol.format.GeoJSON();
var features_kommuneplan_1 = format_kommuneplan_1.readFeatures(json_kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_1.addFeatures(features_kommuneplan_1);
var lyr_kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_1, 
                style: style_kommuneplan_1,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_1.png" /> kommuneplan'
            });
var format_folkeskoler1_2 = new ol.format.GeoJSON();
var features_folkeskoler1_2 = format_folkeskoler1_2.readFeatures(json_folkeskoler1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskoler1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskoler1_2.addFeatures(features_folkeskoler1_2);
var lyr_folkeskoler1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskoler1_2, 
                style: style_folkeskoler1_2,
                popuplayertitle: 'folkeskoler 1 ',
                interactive: true,
                title: '<img src="styles/legend/folkeskoler1_2.png" /> folkeskoler 1 '
            });
var format_togstationer_3 = new ol.format.GeoJSON();
var features_togstationer_3 = format_togstationer_3.readFeatures(json_togstationer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togstationer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togstationer_3.addFeatures(features_togstationer_3);
var lyr_togstationer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togstationer_3, 
                style: style_togstationer_3,
                popuplayertitle: 'togstationer',
                interactive: true,
                title: '<img src="styles/legend/togstationer_3.png" /> togstationer'
            });
var format_frededeomrder_4 = new ol.format.GeoJSON();
var features_frededeomrder_4 = format_frededeomrder_4.readFeatures(json_frededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_4.addFeatures(features_frededeomrder_4);
var lyr_frededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_4, 
                style: style_frededeomrder_4,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_4_5.png" /> <br />' });
var format_Strandbeskyttelsehvidovre_5 = new ol.format.GeoJSON();
var features_Strandbeskyttelsehvidovre_5 = format_Strandbeskyttelsehvidovre_5.readFeatures(json_Strandbeskyttelsehvidovre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelsehvidovre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelsehvidovre_5.addFeatures(features_Strandbeskyttelsehvidovre_5);
var lyr_Strandbeskyttelsehvidovre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelsehvidovre_5, 
                style: style_Strandbeskyttelsehvidovre_5,
                popuplayertitle: 'Strandbeskyttelse hvidovre',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelsehvidovre_5.png" /> Strandbeskyttelse hvidovre'
            });
var format_Lokalplaner_6 = new ol.format.GeoJSON();
var features_Lokalplaner_6 = format_Lokalplaner_6.readFeatures(json_Lokalplaner_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplaner_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplaner_6.addFeatures(features_Lokalplaner_6);
var lyr_Lokalplaner_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplaner_6, 
                style: style_Lokalplaner_6,
                popuplayertitle: 'Lokalplaner',
                interactive: true,
    title: 'Lokalplaner<br />\
    <img src="styles/legend/Lokalplaner_6_0.png" /> 1024399<br />\
    <img src="styles/legend/Lokalplaner_6_1.png" /> 1053515<br />\
    <img src="styles/legend/Lokalplaner_6_2.png" /> 1061002<br />\
    <img src="styles/legend/Lokalplaner_6_3.png" /> 1061022<br />\
    <img src="styles/legend/Lokalplaner_6_4.png" /> 1061038<br />\
    <img src="styles/legend/Lokalplaner_6_5.png" /> 1061103<br />\
    <img src="styles/legend/Lokalplaner_6_6.png" /> 1061140<br />\
    <img src="styles/legend/Lokalplaner_6_7.png" /> 1061206<br />\
    <img src="styles/legend/Lokalplaner_6_8.png" /> 1061209<br />\
    <img src="styles/legend/Lokalplaner_6_9.png" /> 1061210<br />\
    <img src="styles/legend/Lokalplaner_6_10.png" /> 1061715<br />\
    <img src="styles/legend/Lokalplaner_6_11.png" /> 1061734<br />\
    <img src="styles/legend/Lokalplaner_6_12.png" /> 1061739<br />\
    <img src="styles/legend/Lokalplaner_6_13.png" /> 1061746<br />\
    <img src="styles/legend/Lokalplaner_6_14.png" /> 1061756<br />\
    <img src="styles/legend/Lokalplaner_6_15.png" /> 1061757<br />\
    <img src="styles/legend/Lokalplaner_6_16.png" /> 1061824<br />\
    <img src="styles/legend/Lokalplaner_6_17.png" /> 1061829<br />\
    <img src="styles/legend/Lokalplaner_6_18.png" /> 1062026<br />\
    <img src="styles/legend/Lokalplaner_6_19.png" /> 1062121<br />\
    <img src="styles/legend/Lokalplaner_6_20.png" /> 1070479<br />\
    <img src="styles/legend/Lokalplaner_6_21.png" /> 1071381<br />\
    <img src="styles/legend/Lokalplaner_6_22.png" /> 1074662<br />\
    <img src="styles/legend/Lokalplaner_6_23.png" /> 1074664<br />\
    <img src="styles/legend/Lokalplaner_6_24.png" /> 1074675<br />\
    <img src="styles/legend/Lokalplaner_6_25.png" /> 1075214<br />\
    <img src="styles/legend/Lokalplaner_6_26.png" /> 1075219<br />\
    <img src="styles/legend/Lokalplaner_6_27.png" /> 1075387<br />\
    <img src="styles/legend/Lokalplaner_6_28.png" /> 1075393<br />\
    <img src="styles/legend/Lokalplaner_6_29.png" /> 1075552<br />\
    <img src="styles/legend/Lokalplaner_6_30.png" /> 1075553<br />\
    <img src="styles/legend/Lokalplaner_6_31.png" /> 1075577<br />\
    <img src="styles/legend/Lokalplaner_6_32.png" /> 1075593<br />\
    <img src="styles/legend/Lokalplaner_6_33.png" /> 1075598<br />\
    <img src="styles/legend/Lokalplaner_6_34.png" /> 1075609<br />\
    <img src="styles/legend/Lokalplaner_6_35.png" /> 1075669<br />\
    <img src="styles/legend/Lokalplaner_6_36.png" /> 1075682<br />\
    <img src="styles/legend/Lokalplaner_6_37.png" /> 1075695<br />\
    <img src="styles/legend/Lokalplaner_6_38.png" /> 1075708<br />\
    <img src="styles/legend/Lokalplaner_6_39.png" /> 1075710<br />\
    <img src="styles/legend/Lokalplaner_6_40.png" /> 1075718<br />\
    <img src="styles/legend/Lokalplaner_6_41.png" /> 1075751<br />\
    <img src="styles/legend/Lokalplaner_6_42.png" /> 1075752<br />\
    <img src="styles/legend/Lokalplaner_6_43.png" /> 1075779<br />\
    <img src="styles/legend/Lokalplaner_6_44.png" /> 1075795<br />\
    <img src="styles/legend/Lokalplaner_6_45.png" /> 1075800<br />\
    <img src="styles/legend/Lokalplaner_6_46.png" /> 1075801<br />\
    <img src="styles/legend/Lokalplaner_6_47.png" /> 1075815<br />\
    <img src="styles/legend/Lokalplaner_6_48.png" /> 1075877<br />\
    <img src="styles/legend/Lokalplaner_6_49.png" /> 1075893<br />\
    <img src="styles/legend/Lokalplaner_6_50.png" /> 1075897<br />\
    <img src="styles/legend/Lokalplaner_6_51.png" /> 1075900<br />\
    <img src="styles/legend/Lokalplaner_6_52.png" /> 1075902<br />\
    <img src="styles/legend/Lokalplaner_6_53.png" /> 1075905<br />\
    <img src="styles/legend/Lokalplaner_6_54.png" /> 1075907<br />\
    <img src="styles/legend/Lokalplaner_6_55.png" /> 1075908<br />\
    <img src="styles/legend/Lokalplaner_6_56.png" /> 1076004<br />\
    <img src="styles/legend/Lokalplaner_6_57.png" /> 1076010<br />\
    <img src="styles/legend/Lokalplaner_6_58.png" /> 1076019<br />\
    <img src="styles/legend/Lokalplaner_6_59.png" /> 1076041<br />\
    <img src="styles/legend/Lokalplaner_6_60.png" /> 1076064<br />\
    <img src="styles/legend/Lokalplaner_6_61.png" /> 1076086<br />\
    <img src="styles/legend/Lokalplaner_6_62.png" /> 1076094<br />\
    <img src="styles/legend/Lokalplaner_6_63.png" /> 1076107<br />\
    <img src="styles/legend/Lokalplaner_6_64.png" /> 1076114<br />\
    <img src="styles/legend/Lokalplaner_6_65.png" /> 1076115<br />\
    <img src="styles/legend/Lokalplaner_6_66.png" /> 1076126<br />\
    <img src="styles/legend/Lokalplaner_6_67.png" /> 1076129<br />\
    <img src="styles/legend/Lokalplaner_6_68.png" /> 1076287<br />\
    <img src="styles/legend/Lokalplaner_6_69.png" /> 1076379<br />\
    <img src="styles/legend/Lokalplaner_6_70.png" /> 1076865<br />\
    <img src="styles/legend/Lokalplaner_6_71.png" /> 1076868<br />\
    <img src="styles/legend/Lokalplaner_6_72.png" /> 1076874<br />\
    <img src="styles/legend/Lokalplaner_6_73.png" /> 1076892<br />\
    <img src="styles/legend/Lokalplaner_6_74.png" /> 1076902<br />\
    <img src="styles/legend/Lokalplaner_6_75.png" /> 1076939<br />\
    <img src="styles/legend/Lokalplaner_6_76.png" /> 1076961<br />\
    <img src="styles/legend/Lokalplaner_6_77.png" /> 1076968<br />\
    <img src="styles/legend/Lokalplaner_6_78.png" /> 1077070<br />\
    <img src="styles/legend/Lokalplaner_6_79.png" /> 1077082<br />\
    <img src="styles/legend/Lokalplaner_6_80.png" /> 1077085<br />\
    <img src="styles/legend/Lokalplaner_6_81.png" /> 1077086<br />\
    <img src="styles/legend/Lokalplaner_6_82.png" /> 1077558<br />\
    <img src="styles/legend/Lokalplaner_6_83.png" /> 1077565<br />\
    <img src="styles/legend/Lokalplaner_6_84.png" /> 1078074<br />\
    <img src="styles/legend/Lokalplaner_6_85.png" /> 1078075<br />\
    <img src="styles/legend/Lokalplaner_6_86.png" /> 1078077<br />\
    <img src="styles/legend/Lokalplaner_6_87.png" /> 1078184<br />\
    <img src="styles/legend/Lokalplaner_6_88.png" /> 1078227<br />\
    <img src="styles/legend/Lokalplaner_6_89.png" /> 1078229<br />\
    <img src="styles/legend/Lokalplaner_6_90.png" /> 1078231<br />\
    <img src="styles/legend/Lokalplaner_6_91.png" /> 1078248<br />\
    <img src="styles/legend/Lokalplaner_6_92.png" /> 1078275<br />\
    <img src="styles/legend/Lokalplaner_6_93.png" /> 1078279<br />\
    <img src="styles/legend/Lokalplaner_6_94.png" /> 1078289<br />\
    <img src="styles/legend/Lokalplaner_6_95.png" /> 1078346<br />\
    <img src="styles/legend/Lokalplaner_6_96.png" /> 1078464<br />\
    <img src="styles/legend/Lokalplaner_6_97.png" /> 1078465<br />\
    <img src="styles/legend/Lokalplaner_6_98.png" /> 1078468<br />\
    <img src="styles/legend/Lokalplaner_6_99.png" /> 1079122<br />\
    <img src="styles/legend/Lokalplaner_6_100.png" /> 1079123<br />\
    <img src="styles/legend/Lokalplaner_6_101.png" /> 1079666<br />\
    <img src="styles/legend/Lokalplaner_6_102.png" /> 1079671<br />\
    <img src="styles/legend/Lokalplaner_6_103.png" /> 1081381<br />\
    <img src="styles/legend/Lokalplaner_6_104.png" /> 1084485<br />\
    <img src="styles/legend/Lokalplaner_6_105.png" /> 1084491<br />\
    <img src="styles/legend/Lokalplaner_6_106.png" /> 1084492<br />\
    <img src="styles/legend/Lokalplaner_6_107.png" /> 1103890<br />\
    <img src="styles/legend/Lokalplaner_6_108.png" /> 1109560<br />\
    <img src="styles/legend/Lokalplaner_6_109.png" /> 1328884<br />\
    <img src="styles/legend/Lokalplaner_6_110.png" /> 1359145<br />\
    <img src="styles/legend/Lokalplaner_6_111.png" /> 1369547<br />\
    <img src="styles/legend/Lokalplaner_6_112.png" /> 1374739<br />\
    <img src="styles/legend/Lokalplaner_6_113.png" /> 1792902<br />\
    <img src="styles/legend/Lokalplaner_6_114.png" /> 1869505<br />\
    <img src="styles/legend/Lokalplaner_6_115.png" /> 2136388<br />\
    <img src="styles/legend/Lokalplaner_6_116.png" /> 2186492<br />\
    <img src="styles/legend/Lokalplaner_6_117.png" /> 2269185<br />\
    <img src="styles/legend/Lokalplaner_6_118.png" /> 2641209<br />\
    <img src="styles/legend/Lokalplaner_6_119.png" /> 2702963<br />\
    <img src="styles/legend/Lokalplaner_6_120.png" /> 2702964<br />\
    <img src="styles/legend/Lokalplaner_6_121.png" /> 2702965<br />\
    <img src="styles/legend/Lokalplaner_6_122.png" /> 2702968<br />\
    <img src="styles/legend/Lokalplaner_6_123.png" /> 2702969<br />\
    <img src="styles/legend/Lokalplaner_6_124.png" /> 2702993<br />\
    <img src="styles/legend/Lokalplaner_6_125.png" /> 2978253<br />\
    <img src="styles/legend/Lokalplaner_6_126.png" /> 3016098<br />\
    <img src="styles/legend/Lokalplaner_6_127.png" /> 3016099<br />\
    <img src="styles/legend/Lokalplaner_6_128.png" /> 3016105<br />\
    <img src="styles/legend/Lokalplaner_6_129.png" /> 3186913<br />\
    <img src="styles/legend/Lokalplaner_6_130.png" /> 3188617<br />\
    <img src="styles/legend/Lokalplaner_6_131.png" /> 3188619<br />\
    <img src="styles/legend/Lokalplaner_6_132.png" /> 3812280<br />\
    <img src="styles/legend/Lokalplaner_6_133.png" /> 3964626<br />\
    <img src="styles/legend/Lokalplaner_6_134.png" /> 3964627<br />\
    <img src="styles/legend/Lokalplaner_6_135.png" /> 3964812<br />\
    <img src="styles/legend/Lokalplaner_6_136.png" /> 9419556<br />\
    <img src="styles/legend/Lokalplaner_6_137.png" /> 9431987<br />\
    <img src="styles/legend/Lokalplaner_6_138.png" /> 9431989<br />\
    <img src="styles/legend/Lokalplaner_6_139.png" /> 9431990<br />\
    <img src="styles/legend/Lokalplaner_6_140.png" /> 9431991<br />\
    <img src="styles/legend/Lokalplaner_6_141.png" /> 9431992<br />\
    <img src="styles/legend/Lokalplaner_6_142.png" /> 9431993<br />\
    <img src="styles/legend/Lokalplaner_6_143.png" /> 9431994<br />\
    <img src="styles/legend/Lokalplaner_6_144.png" /> 9690454<br />\
    <img src="styles/legend/Lokalplaner_6_145.png" /> 9717080<br />\
    <img src="styles/legend/Lokalplaner_6_146.png" /> 9731022<br />\
    <img src="styles/legend/Lokalplaner_6_147.png" /> 9732835<br />\
    <img src="styles/legend/Lokalplaner_6_148.png" /> 9732862<br />\
    <img src="styles/legend/Lokalplaner_6_149.png" /> 9753254<br />\
    <img src="styles/legend/Lokalplaner_6_150.png" /> 10353005<br />\
    <img src="styles/legend/Lokalplaner_6_151.png" /> 10456675<br />\
    <img src="styles/legend/Lokalplaner_6_152.png" /> 10478656<br />\
    <img src="styles/legend/Lokalplaner_6_153.png" /> 10840028<br />\
    <img src="styles/legend/Lokalplaner_6_154.png" /> 10900534<br />\
    <img src="styles/legend/Lokalplaner_6_155.png" /> 10906517<br />\
    <img src="styles/legend/Lokalplaner_6_156.png" /> 10985743<br />\
    <img src="styles/legend/Lokalplaner_6_157.png" /> 11021467<br />\
    <img src="styles/legend/Lokalplaner_6_158.png" /> 11126774<br />\
    <img src="styles/legend/Lokalplaner_6_159.png" /> 11159816<br />\
    <img src="styles/legend/Lokalplaner_6_160.png" /> 11176926<br />\
    <img src="styles/legend/Lokalplaner_6_161.png" /> 11185105<br />\
    <img src="styles/legend/Lokalplaner_6_162.png" /> 11198619<br />\
    <img src="styles/legend/Lokalplaner_6_163.png" /> 11228193<br />\
    <img src="styles/legend/Lokalplaner_6_164.png" /> 11240317<br />\
    <img src="styles/legend/Lokalplaner_6_165.png" /> 11252419<br />\
    <img src="styles/legend/Lokalplaner_6_166.png" /> 11307736<br />\
    <img src="styles/legend/Lokalplaner_6_167.png" /> 11307768<br />\
    <img src="styles/legend/Lokalplaner_6_168.png" /> 11317442<br />\
    <img src="styles/legend/Lokalplaner_6_169.png" /> 11347122<br />\
    <img src="styles/legend/Lokalplaner_6_170.png" /> <br />' });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_kommuneplan_1.setVisible(true);lyr_folkeskoler1_2.setVisible(true);lyr_togstationer_3.setVisible(true);lyr_frededeomrder_4.setVisible(true);lyr_Strandbeskyttelsehvidovre_5.setVisible(true);lyr_Lokalplaner_6.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_kommuneplan_1,lyr_folkeskoler1_2,lyr_togstationer_3,lyr_frededeomrder_4,lyr_Strandbeskyttelsehvidovre_5,lyr_Lokalplaner_6];
lyr_kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_folkeskoler1_2.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_togstationer_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_frededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Strandbeskyttelsehvidovre_5.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_Lokalplaner_6.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_kommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_folkeskoler1_2.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_togstationer_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_frededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Strandbeskyttelsehvidovre_5.set('fieldImages', {'fid': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_Lokalplaner_6.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_kommuneplan_1.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'id': 'inline label - always visible', 'planid': 'inline label - always visible', 'objektkode': 'hidden field', 'komnr': 'hidden field', 'plannavn': 'hidden field', 'doklink': 'inline label - always visible', 'datoforsl': 'hidden field', 'datovedt': 'inline label - always visible', 'datoaflyst': 'hidden field', 'datoikraft': 'hidden field', 'datoslut': 'hidden field', 'aktuel': 'hidden field', 'datooprt': 'hidden field', 'datoopdt': 'hidden field', 'status': 'hidden field', 'datostart': 'hidden field', 'glkomnr': 'hidden field', 'kommunenavn': 'hidden field', 'glkomnavn': 'hidden field', 'glkomnavn_besk': 'hidden field', });
lyr_folkeskoler1_2.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_togstationer_3.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_frededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Strandbeskyttelsehvidovre_5.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_Lokalplaner_6.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Lokalplaner_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});