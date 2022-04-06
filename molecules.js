var MolvwrSamples = MolvwrSamples || {};

(function(){
	'use strict';

	MolvwrSamples.Rendering = {
		Toon : function(){
			return null;
		},
		
		Rocks : function(){
			var viewmodeOptions = Molvwr.ViewModes.Standard.defaultConfig();
			viewmodeOptions.sphere.bumpTexture = "textures/15_NORMAL.jpg";
			//viewmodeOptions.sphere.diffuseTexture = "textures/03_DIFFUSE.jpg",
			viewmodeOptions.sphere.specularTexture = "textures/15_DIFFUSE.jpg",
			viewmodeOptions.sphere.textureScale = 1;
			viewmodeOptions.cylinder.bumpTexture = "textures/15_NORMAL.jpg";
			viewmodeOptions.cylinder.specularTexture = "textures/15_DIFFUSE.jpg",
			viewmodeOptions.cylinder.textureScale = 1;
			viewmodeOptions.emisivefresnel.bias = 0.4;
			return new Molvwr.ViewModes.Standard(viewmodeOptions);
		},
	};

	MolvwrSamples.viewmodes = [
		{ name : "View type", id:"viewtype", inline: true, childs: [
			{ name : 'Spheres', id:"spheres", type:"viewtype", cfg : Molvwr.Config.spheres},
			{ name : 'Balls and sticks', id:"ballsandsticks", type:"viewtype", cfg : Molvwr.Config.ballsAndSticks},
			{ name : 'Sticks', id:"sticks", type:"viewtype", cfg : Molvwr.Config.sticks},
			]},
		{ name : "Texture", id:"rendering", type:"rendering", inline: true, childs: [
			{ name : 'Flat', id:"flat", type:"rendering", cfg : MolvwrSamples.Rendering.Toon },
			{ name : 'Rocks', id:"rocks", type:"rendering", cfg : MolvwrSamples.Rendering.Rocks},
		]}
	];

	MolvwrSamples.molecules = [
		{ name : "daylife", id:"daylife", childs: [
			{ name : "Water", id:"water", url: "molsamples/pdb/water.txt", format: "pdb"},
			{ name : "Aspirin", id:"aspirin", url: "molsamples/mol/aspirin.txt", format: "mol"},
			{ name : "Cellulose", id:"cellulose", url: "molsamples/pdb/cellulose.txt", format: "pdb"},
		]},
		{ name : "food", id:"food", childs: [
			{ name : "Aromas", id:"aromas", childs: [
				{ name : "Limonene (lemon)", id:"limonene", url: "molsamples/mol/limonene.txt", format: "mol"},
				{ name : "Menthol (mint)", id:"menthol", url: "molsamples/mol/menthol.txt", format: "mol"},
				{ name : "Humulone (beer)", id:"humulone", url: "molsamples/mol/humulone.txt", format: "mol"}, //beer taste
				
			]},
			{ name : "vitamins", id: "vitamins", childs: [
				{ name : "Retinol (vit. A)", id:"retinol", url : "molsamples/mol/vitamin_A_retinol.txt", format : "mol" },
				{ name : "Riboflavin (vit. B2)", id:"riboflavin", url : "molsamples/mol/vitamin_B2_Riboflavin.txt", format : "mol" },
				{ name : "Pyridoxine (vit. B6)", id:"pyridoxine", url : "molsamples/mol/vitamin_B6_pyridoxine.txt", format : "mol" },
				{ name : "cyanocobalamin (vit. B12)", id:"cyanocobalamin", url : "molsamples/mol/vitamin_B12_cyanocobalamin.txt", format : "mol" },
				{ name : "Ascorbic acid (vit. C)", id:"ascorbicacid", url : "molsamples/mol/vitamin_C_ascorbic acid.txt", format : "mol" },
				{ name : "Cholecalciferol (vit. D3)", id:"cholecalciferol", url : "molsamples/mol/vitamin_D3_Cholecalciferol.txt", format : "mol" },
				{ name : "Tocopherol (vit. E)", id:"tocopherol", url : "molsamples/mol/vitamin_E_tocopherol.txt", format : "mol" },
				{ name : "Menadione (vit. K3)", id:"menadione", url : "molsamples/mol/vitamin_K3_menadione.txt", format : "mol" },
				{ name : "Biotin (vit. H)", id:"biotin", url : "molsamples/mol/vitamin_H_biotin.txt", format : "mol" },
			]},
			{ name : "lipids", id:"food-lipids", childs: [
				{ name : "Linoleic acid (aka Omega 3)", id:"linoleicacid", url : "molsamples/xyz/linoleic acid.txt", format : "xyz" },
				{ name : "Arachidonic", id:"arachidonic", url: "molsamples/pdb/lipids/arachidonic.txt", format: "pdb"},
				{ name : "Dlpe", id:"dlpe", url: "molsamples/pdb/lipids/dlpe.txt", format: "pdb"},
				{ name : "Dmpg", id:"dmpg", url: "molsamples/pdb/lipids/dmpg.txt", format: "pdb"},
				{ name : "Dppc", id:"dppc", url: "molsamples/pdb/lipids/dppc.txt", format: "pdb"},
				{ name : "Linoleic", id:"linoleic", url: "molsamples/pdb/lipids/linoleic.txt", format: "pdb"},
				{ name : "Oleic", id:"oleic", url: "molsamples/pdb/lipids/oleic.txt", format: "pdb"},
				{ name : "Palmitic", id:"palmitic", url: "molsamples/pdb/lipids/palmitic.txt", format: "pdb"},
				{ name : "Pdmpg", id:"pdmpg", url: "molsamples/pdb/lipids/pdmpg.txt", format: "pdb"},
				{ name : "Stearic", id:"stearic", url: "molsamples/pdb/lipids/stearic.txt", format: "pdb"},
				{ name : "Cholesterol", id:"cholesterol", url: "molsamples/mol/cholesterol.txt", format: "mol"},
				{ name : "Triglyceride", id:"triglyceride", url: "molsamples/mol/triglyceride.txt", format: "mol"},
			]},
			{ name : "sugars", id:"food-sugars", childs: [
				{ name : "Glucose", id:"glucose", url : "molsamples/mol/glucose.txt", format : "mol" },
				{ name : "Cellulose", id:"cellulose", url: "molsamples/pdb/cellulose.txt", format: "pdb"},
			]},
			{ name : "misc.", id:"food-misc", childs: [
				{ name : "Caffeine", id:"caffeine", url: "molsamples/xyz/caffeine.txt", format: "xyz"},				
			]},			
		]},
		{ name : "drugs", id:"drugs", childs: [
			{ name : "Pennicilin", id:"pennicilin", url : "molsamples/mol/pennicilin.txt", format : "mol" },
			{ name : "Morphine", id:"morphine", url: "molsamples/mol/morphine.txt", format: "mol"},
			{ name : "AZT", id:"azt", url: "molsamples/pdb/drugs/azt.txt", format: "pdb"},
			{ name : "Barbiturate", id:"barbiturate", url: "molsamples/pdb/drugs/barbiturate.txt", format: "pdb"},
			{ name : "Caffeine", id:"caffeine", url: "molsamples/xyz/caffeine.txt", format: "xyz"},
			{ name : "Cisplantin", id:"cisplantin", url: "molsamples/pdb/drugs/cisplantin.txt", format: "pdb"},
			{ name : "Ibuprofen", id:"ibuprofen", url: "molsamples/pdb/drugs/ibuprofen.txt", format: "pdb"},
			{ name : "Paracetamol", id:"paracetamol", url: "molsamples/pdb/drugs/paracetamol.txt", format: "pdb"},
			{ name : "Nicotine", id:"nicotine", url: "molsamples/pdb/drugs/nicotine.txt", format: "pdb"},
			{ name : "Streptomycin", id:"streptomycin", url: "molsamples/pdb/drugs/streptomycin.txt", format: "pdb"},
			{ name : "Taxol", id:"taxol", url: "molsamples/pdb/drugs/taxol.txt", format: "pdb"},
			{ name : "THC", id:"thc", url: "molsamples/pdb/drugs/thc.txt", format: "pdb"},
			{ name : "Valium", id:"valium", url: "molsamples/pdb/drugs/valium.txt", format: "pdb"},
			{ name : "Zantac", id:"zantac", url: "molsamples/pdb/drugs/zantac.txt", format: "pdb"},
			{ name : "Amoxicillin", id:"amoxicillin", url: "molsamples/mol/amoxicillin.txt", format: "mol"},
		]},
		{ name : "life building blocks", id:"life", childs: [
			{ name : "amino acids", id:"aminoacids", childs: [
				{ name : "Alanine", id:"alanine", url: "molsamples/pdb/aminoacids/alanine.txt", format: "pdb"},
				{ name : "Arginine", id:"arginine", url: "molsamples/pdb/aminoacids/arginine.txt", format: "pdb"},
				{ name : "Asparagine", id:"asparagine", url: "molsamples/pdb/aminoacids/asparagine.txt", format: "pdb"},
				{ name : "Aspartic acid", id:"asparticacid", url: "molsamples/pdb/aminoacids/aspartic_acid.txt", format: "pdb"},
				{ name : "Cysteine", id:"cysteine", url: "molsamples/pdb/aminoacids/cysteine.txt", format: "pdb"},
				{ name : "Glutamic acid", id:"glutamicacid", url: "molsamples/pdb/aminoacids/glutamic_acid.txt", format: "pdb"},
				{ name : "Glutamine", id:"glutamine", url: "molsamples/pdb/aminoacids/glutamine.txt", format: "pdb"},
				{ name : "Glycine", id:"glycine", url: "molsamples/pdb/aminoacids/glycine.txt", format: "pdb"},
				{ name : "Histidine", id:"histidine", url: "molsamples/pdb/aminoacids/histidine.txt", format: "pdb"},
				{ name : "Isoleucine", id:"isoleucine", url: "molsamples/pdb/aminoacids/isoleucine.txt", format: "pdb"},
				{ name : "Leucine", id:"leucine", url: "molsamples/pdb/aminoacids/leucine.txt", format: "pdb"},
				{ name : "Lysine", id:"lysine", url: "molsamples/pdb/aminoacids/lysine.txt", format: "pdb"},
				{ name : "Methionine", id:"methionine", url: "molsamples/pdb/aminoacids/methionine.txt", format: "pdb"},
				{ name : "Phenalalanine", id:"phenalalanine", url: "molsamples/pdb/aminoacids/phenalalanine.txt", format: "pdb"},
				{ name : "Proline", id:"proline", url: "molsamples/pdb/aminoacids/proline.txt", format: "pdb"},
				{ name : "Serine", id:"serine", url: "molsamples/pdb/aminoacids/serine.txt", format: "pdb"},
				{ name : "Threonine", id:"threonine", url: "molsamples/pdb/aminoacids/threonine.txt", format: "pdb"},
				{ name : "Tryptophan", id:"tryptophan", url: "molsamples/pdb/aminoacids/tryptophan.txt", format: "pdb"},
				{ name : "Tyrosine", id:"tyrosine", url: "molsamples/pdb/aminoacids/tyrosine.txt", format: "pdb"},
				{ name : "Valine", id:"valine", url: "molsamples/pdb/aminoacids/valine.txt", format: "pdb"},
			]},
			{ name : "proteins", id:"proteins", childs: [
				{ name : "4E0O", id:"4E0O", url: "molsamples/xyz/4E0O.txt", format: "xyz"},
				{ name : "4QCI", id:"4QCI", url: "molsamples/xyz/4QCI.txt", format: "xyz"},
				{ name : "1GCN (glucagon)", id:"1GCN", url: "molsamples/pdb/proteins/1GCN_glucagon.txt", format: "pdb"},				
				{ name : "Haemoglobin", id:"haemoglobin", url: "molsamples/pdb/proteins/haemoglobin.txt", format: "pdb"},
				{ name : "Collagen", id:"collagen", url: "molsamples/pdb/proteins/collagen.txt", format: "pdb"},
				{ name : "Estrogen receptor", id:"estrogenreceptor", url: "molsamples/pdb/proteins/estrogen_receptor.txt", format: "pdb"},
			]},
			{ name : "photosyntetic", id:"photosyntetic", childs: [
				{ name : "Carotene", id:"carotene", url: "molsamples/pdb/photosynthetic/carotene.txt", format: "pdb"},
				{ name : "Chlorophyll", id:"chlorophyll", url: "molsamples/pdb/photosynthetic/chlorophyll.txt", format: "pdb"},
				{ name : "Cytochrome", id:"cytochrome", url: "molsamples/pdb/photosynthetic/cytochrome.txt", format: "pdb"},
				{ name : "Pheophytin", id:"pheophytin", url: "molsamples/pdb/photosynthetic/pheophytin.txt", format: "pdb"},
				{ name : "prc", id:"prc", url: "molsamples/pdb/photosynthetic/prc.txt", format: "pdb"},
				{ name : "Quinone", id:"quinone", url: "molsamples/pdb/photosynthetic/quinone.txt", format: "pdb"},
			]},
			{ name : "hormones", id:"hormones", childs: [
				{ name : "Adrenaline", id:"adrenaline", url: "molsamples/pdb/drugs/adrenaline.txt", format: "pdb"},
				{ name : "Testosterone", id:"testosterone", url: "molsamples/xyz/testosterone.txt", format: "xyz"},
				{ name : "Progesterone (Estrogen)", id:"progesterone", url: "molsamples/mol/progesterone_estrogen.txt", format: "mol"},
				{ name : "Estradiol (Estrogen)", id:"estradiol", url: "molsamples/mol/estradiol_estrogen.txt", format: "mol"},
				{ name : "Insulin", id:"insulin", url: "molsamples/pdb/proteins/insulin.txt", format: "pdb"},
			]},
			
			{ name : "DNA fragment", id:"dna", url: "molsamples/xyz/dna.txt", format: "xyz"},		
			
		]},

		{ name : "carbon", id:"carbon", childs: [
			{ name : "Graphite", id:"carbongraphite", url: "molsamples/xyz/graphite.txt", format: "xyz"},
			{ name : "Diamond", id:"carbondiamond", url: "molsamples/xyz/diamond.txt", format: "xyz"},
			{ name : "Fullerene", id:"fullerene", url: "molsamples/xyz/fullerene.txt", format: "xyz"},
			{ name : "Graphene", id:"graphene", url: "molsamples/xyz/graphene.txt", format: "xyz"},
			{ name : "Nano tube", id:"nanotube", url: "molsamples/mol/btube.txt", format: "mol"},
		]},

		{ name : "organic chem.", id:"org chem", childs: [
			{ name : "Methane", id:"methane", url: "molsamples/xyz/methane.txt", format: "xyz"},
			{ name : "Benzene", id:"benzene", url: "molsamples/xyz/benzene.txt", format: "xyz"},			
		]},
		
		//{ name : "Creatin", id:"creatin", url: "molsamples/mol/creatin.txt", format: "mol"},
		//{ name : "Gold structure", id:"gold", url: "molsamples/xyz/Au.txt", format: "xyz"},
		//{ name : "Gold thiol complex", id:"goldthiol", url: "molsamples/xyz/au_thiol.txt", format: "xyz"},
		
	];
})();