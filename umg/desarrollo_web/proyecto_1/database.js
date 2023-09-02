var databaseName = 'CatalogosDb';
var version = 1.0;
var textDescription = 'Base de datos de catálogos';
var dbSize = 2 * 1024 * 1024;
var webSQLEnabled = true;

if(!openDatabase)
{
    webSQLEnabled = false;
}

var dbObj = openDatabase(databaseName, version, textDescription, dbSize);

if(!dbObj)
{
    webSQLEnabled = false;
}

var productList = [];

function InitializeData(t){
    t.executeSql('insert into Products (Id, Name, Price, Image) values (1, "Blusa Azul", 50.00,"https://images.thebestshops.com/product_images/original/SL10419-032_01-d0c08e.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (2, "Blusa Verde", 50.00,"https://cdnx.jumpseller.com/mia-boutique/image/34973197/image_picker_42C8CAF6-08B2-444D-9FD7-AF01CF03179C-4303-000000E10BE106E9.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (3, "Blusa Roja", 50.00,"https://images.thebestshops.com/product_images/original/michael-kors-blouses-front-pleat-impalpable-silk-blouse-00000085186f00s031.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (4, "Blusa Blanca", 50.00,"https://darcyonline.com.mx/wp-content/uploads/2022/03/3531-1-Blanco-scaled.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (5, "Blusa Negra", 50.00,"https://mariaferre.com/cdn/shop/products/Blusadeporte1atras_1800x1800.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (6, "Calcetas", 25.00,"https://i.ebayimg.com/images/g/AsIAAOSwLLZa2esL/s-l1200.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (7, "Calcetines", 15.75,"https://i.ebayimg.com/images/g/cRkAAOSwaOpbewhC/s-l1200.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (8, "Gorra Azul", 31.45,"https://www.promoopcion.com/media/catalog/product/cache/4c3f0d3c766e4a6b2825d11d3373d3aa/G/S/GSP-002-A.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (9, "Gorra Verde", 31.45,"https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-VERDE-BOTELLA-1616669883.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (10, "Gorra Roja", 31.45,"https://www.writersmadrid.es/7163/gorra-trucker-roja.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (11, "Gorra Blanca", 31.45,"https://i5.walmartimages.com/seo/Grupo-Ruz-Sa-De-Cv-Gorra-Puerto-Rico-Blanca_2ec042d6-93a8-413f-a171-68848ac1fb98.9dc12dfa950b76becb1c1115462568eb.jpeg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (12, "Gorra Negra", 31.45,"https://images.footballfanatics.com/chicago-blackhawks/mens-adidas-black-chicago-blackhawks-earflap-flex-hat_ss5_p-4691101+pv-1+u-6cdun1r32eitp9z4j8kv+v-o9trwvyjao5zirx1fmxb.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (13, "Pantalón", 150.00,"https://hmchile.vtexassets.com/arquivos/ids/5370868/Pantalon-cigarette---Negro---H-M-CL.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (14, "Pantaloneta", 95.00,"https://i0.wp.com/micosportswear.com/wp-content/uploads/2022/10/232-1.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (15, "Playera Azul", 55.00,"https://www.cyamoda.com/on/demandware.static/-/Sites-siteCatalog_cya_mx/default/dwe70f16aa/images/NOVIEMBRE_21/3067050_B.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (16, "Playera Verde", 55.00,"https://images.tcdn.com.br/img/img_prod/275189/camisa_verde_bandeira_100_poliester_para_sublimacao_p_3607_1_20fb9713aa6968be485a000634f7c9cf.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (17, "Playera Roja", 55.00,"https://images.merligrego.com/rx/1000x1250,q_90,ofmt_webp/s4/l_p:3105952:c72817bfd6e66a44/co_rgb:EE1C34,e_colorize:100/fl_layer_apply/l_p:3105952:8db84b_sh/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/3105952/de5846e5b6114138/t/30e1e8718cf8e1ee.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (18, "Playera Blanca", 55.00,"https://www.creativeboys.com/cdn/shop/products/Playera-Blanca-Smiley.jpg?v=1645902338")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (19, "Playera Negra", 55.00,"https://www.cyamoda.com/on/demandware.static/-/Sites-siteCatalog_cya_mx/default/dw0459931f/images/NOVIEMBRE_21/3057046_B.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (20, "Pulsera", 71.00,"https://www.eljardindeldeseo.es/36550-thickbox_default/pulseras-hombre-de-cuero-tricolor-con-ancla.jpg")');
    t.executeSql('insert into Products (Id, Name, Price, Image) values (21, "Reloj", 520.00,"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/1c672c04-74d6-4c59-82d3-e78cef5e26bb.106f45bb767cf65b82f8fe0a5d600423.jpeg")');
}

function SelectProducts(t, callback){
    t.executeSql('SELECT * FROM Products', [], function (t, results){
        var len = results.rows.length;
        MapProducts(results.rows, len, callback);
    }, null);
}

function MapProducts(rows, len, callback){
    var i;
    productList = [];
    if(len > 0)
    {
        for(i=0; i < len; i++){
            productList.push({ 
                Id: rows.item(i).Id,
                Name: rows.item(i).Name,
                Price: parseFloat(rows.item(i).Price),
                Image: rows.item(i).Image
            });
        }

        callback(productList);
    }
}

function GetProductList(callback){
    if(webSQLEnabled)
    {
        dbObj.transaction(function(t){
            t.executeSql('CREATE TABLE IF NOT EXISTS Products (Id unique, Name, Price, Image)');
        });
        
        dbObj.transaction(function(t){
            SelectProducts(t, callback);
            if(productList.length == 0)
            {
                InitializeData(t);
                SelectProducts(t, callback);
            }
        });
    }
    else
    {
        alert('WebSQL no está habilitado en el naviegador. Se mostrará la información cargada en memoria.');
        var cacheProducts = [
            {
                Id: 1,
                Name: "Blusa Azul",
                Price: 50.00,
                Image: "https://images.thebestshops.com/product_images/original/SL10419-032_01-d0c08e.jpg"
            },
            {
                Id: 2,
                Name: "Blusa Verde",
                Price: 50.00,
                Image: "https://cdnx.jumpseller.com/mia-boutique/image/34973197/image_picker_42C8CAF6-08B2-444D-9FD7-AF01CF03179C-4303-000000E10BE106E9.jpg"
            },
            {
                Id: 3,
                Name: "Blusa Roja",
                Price: 50.00,
                Image: "https://images.thebestshops.com/product_images/original/michael-kors-blouses-front-pleat-impalpable-silk-blouse-00000085186f00s031.jpg"
            },
            {
                Id: 4,
                Name: "Blusa Blanca",
                Price: 50.00,
                Image: "https://darcyonline.com.mx/wp-content/uploads/2022/03/3531-1-Blanco-scaled.jpg"
            },
            {
                Id: 5,
                Name: "Blusa Negra",
                Price: 50.00,
                Image: "https://mariaferre.com/cdn/shop/products/Blusadeporte1atras_1800x1800.jpg"
            },
            {
                Id: 6,
                Name: "Calcetas",
                Price: 25.00,
                Image: "https://i.ebayimg.com/images/g/AsIAAOSwLLZa2esL/s-l1200.jpg"
            },
            {
                Id: 7,
                Name: "Calcetines",
                Price: 15.75,
                Image: "https://i.ebayimg.com/images/g/cRkAAOSwaOpbewhC/s-l1200.jpg"
            },
            {
                Id: 8,
                Name: "Gorra Azul",
                Price: 31.45,
                Image: "https://www.promoopcion.com/media/catalog/product/cache/4c3f0d3c766e4a6b2825d11d3373d3aa/G/S/GSP-002-A.jpg"
            },
            {
                Id: 9,
                Name: "Gorra Verde",
                Price: 31.45,
                Image: "https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-VERDE-BOTELLA-1616669883.jpg"
            },
            {
                Id: 10,
                Name: "Gorra Roja",
                Price: 31.45,
                Image: "https://www.writersmadrid.es/7163/gorra-trucker-roja.jpg"
            },
            {
                Id: 11,
                Name: "Gorra Blanca",
                Price: 31.45,
                Image: "https://i5.walmartimages.com/seo/Grupo-Ruz-Sa-De-Cv-Gorra-Puerto-Rico-Blanca_2ec042d6-93a8-413f-a171-68848ac1fb98.9dc12dfa950b76becb1c1115462568eb.jpeg"
            },
            {
                Id: 12,
                Name: "Gorra Negra",
                Price: 31.45,
                Image: "https://images.footballfanatics.com/chicago-blackhawks/mens-adidas-black-chicago-blackhawks-earflap-flex-hat_ss5_p-4691101+pv-1+u-6cdun1r32eitp9z4j8kv+v-o9trwvyjao5zirx1fmxb.jpg"
            },
            {
                Id: 13,
                Name: "Pantalón",
                Price: 150.00,
                Image: "https://hmchile.vtexassets.com/arquivos/ids/5370868/Pantalon-cigarette---Negro---H-M-CL.jpg"
            },
            {
                Id: 14,
                Name: "Pantaloneta",
                Price: 95.00,
                Image: "https://i0.wp.com/micosportswear.com/wp-content/uploads/2022/10/232-1.jpg"
            },
            {
                Id: 15,
                Name: "Playera Azul",
                Price: 55.00,
                Image: "https://www.cyamoda.com/on/demandware.static/-/Sites-siteCatalog_cya_mx/default/dwe70f16aa/images/NOVIEMBRE_21/3067050_B.jpg"
            },
            {
                Id: 16,
                Name: "Playera Verde",
                Price: 55.00,
                Image: "https://images.tcdn.com.br/img/img_prod/275189/camisa_verde_bandeira_100_poliester_para_sublimacao_p_3607_1_20fb9713aa6968be485a000634f7c9cf.jpg"
            },
            {
                Id: 17,
                Name: "Playera Roja",
                Price: 55.00,
                Image: "https://images.merligrego.com/rx/1000x1250,q_90,ofmt_webp/s4/l_p:3105952:c72817bfd6e66a44/co_rgb:EE1C34,e_colorize:100/fl_layer_apply/l_p:3105952:8db84b_sh/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/3105952/de5846e5b6114138/t/30e1e8718cf8e1ee.jpg"
            },
            {
                Id: 18,
                Name: "Playera Blanca",
                Price: 55.00,
                Image: "https://www.creativeboys.com/cdn/shop/products/Playera-Blanca-Smiley.jpg?v=1645902338"
            },
            {
                Id: 19,
                Name: "Playera Negra",
                Price: 55.00,
                Image: "https://www.cyamoda.com/on/demandware.static/-/Sites-siteCatalog_cya_mx/default/dw0459931f/images/NOVIEMBRE_21/3057046_B.jpg"
            },
            {
                Id: 20,
                Name: "Pulsera",
                Price: 71.00,
                Image: "https://www.eljardindeldeseo.es/36550-thickbox_default/pulseras-hombre-de-cuero-tricolor-con-ancla.jpg"
            },
            {
                Id: 21,
                Name: "Reloj",
                Price: 520.00,
                Image: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/1c672c04-74d6-4c59-82d3-e78cef5e26bb.106f45bb767cf65b82f8fe0a5d600423.jpeg"
            }
        ];        
        callback(cacheProducts);
    }
}