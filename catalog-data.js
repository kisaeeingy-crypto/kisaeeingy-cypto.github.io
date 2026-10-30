(() => {
  const products = [
    { id: 'mango', brand: 'Aneka snacks', collection: 'bliss-snacks', fruit: 'Mango', name: 'Freeze-Dried Mango', image: 'buah1bugil.png', detailImage: 'buah1.jpg', description: 'Mangga tropis renyah dengan rasa manis alami.' },
    { id: 'banana', brand: 'Aneka snacks', collection: 'bliss-snacks', fruit: 'Banana', name: 'Freeze-Dried Banana', image: 'buah2bugil.png', detailImage: 'buah2.jpg', description: 'Pisang renyah dengan manis yang ringan.' },
    { id: 'blueberry', brand: 'Aneka snacks', collection: 'bliss-snacks', fruit: 'Blueberry', name: 'Freeze-Dried Blueberry', image: 'buah4bugil.png', detailImage: 'buah4.jpg', description: 'Blueberry renyah dalam camilan praktis.' },
    { id: 'strawberry', brand: 'Aneka snacks', collection: 'bliss-snacks', fruit: 'Strawberry', name: 'Freeze-Dried Strawberry', image: 'buah3bugil.png', detailImage: 'buah3.jpg', description: 'Stroberi renyah dengan rasa buah segar.' },
    { id: 'gng-1', brand: 'Good & Gather', collection: 'category-c', fruit: 'Kiwi', name: 'Unsweetened Dried Kiwi', image: 'bgng1.png', detailImage: 'gng1.jpg', description: 'Kiwi kering tanpa pemanis tambahan.' },
    { id: 'gng-2', brand: 'Good & Gather', collection: 'category-c', fruit: 'Peach', name: 'Peach Slices', image: 'bgng2.png', detailImage: 'gng2.jpg', description: 'Irisan persik kering dengan rasa manis dan segar.' },
    { id: 'gng-3', brand: 'Good & Gather', collection: 'category-c', fruit: 'Pineapple', name: 'Dried Pineapple', image: 'bgng3.png', detailImage: 'gng3.jpg', description: 'Nanas kering dengan rasa manis dan segar.' },
    { id: 'gng-4', brand: 'Good & Gather', collection: 'category-c', fruit: 'Banana', name: 'Dried Banana', image: 'bgng4.png', detailImage: 'gng4.jpg', description: 'Irisan pisang kering yang renyah.' },
    { id: 'gng-5', brand: 'Good & Gather', collection: 'category-c', fruit: 'Mango', name: 'Freeze-Dried Mango', image: 'bgng5.png', detailImage: 'gng5.jpg', description: 'Mangga freeze-dried dengan rasa buah yang cerah.' },
    { id: 'gng-6', brand: 'Good & Gather', collection: 'category-c', fruit: 'Apple', name: 'Dried Apple', image: 'bgng6.png', detailImage: 'gng6.jpg', description: 'Apel kering untuk camilan sehari-hari.' },
    { id: 'gng-7', brand: 'Good & Gather', collection: 'category-c', fruit: 'Raspberries', name: 'Raspberries', image: 'bgng7.png', detailImage: 'gng7.jpg', description: 'Raspberry kering yang renyah dengan rasa asam-manis.' },
    { id: 'gng-8', brand: 'Good & Gather', collection: 'category-c', fruit: 'Strawberry', name: 'Strawberry Slices', image: 'bgng8.png', detailImage: 'gng8.jpg', description: 'Irisan stroberi kering dengan rasa buah yang segar.' },
    { id: 'gng-9', brand: 'Good & Gather', collection: 'category-c', fruit: 'Cherries', name: 'Cherries', image: 'bgng9.png', detailImage: 'gng9.jpg', description: 'Ceri kering dengan rasa manis dan sedikit asam.' },
    { id: 'gng-10', brand: 'Good & Gather', collection: 'category-c', fruit: 'Dragon Fruit', name: 'Dragon Fruit Chunks', image: 'bgng10.png', detailImage: 'gng10.jpg', description: 'Potongan buah naga kering dengan rasa tropis.' },
    { id: 'gng-11', brand: 'Good & Gather', collection: 'category-c', fruit: 'Raspberry', name: 'Dried Raspberry', image: 'bgng11.png', detailImage: 'gng11.jpg', description: 'Raspberry kering untuk camilan buah yang praktis.' },
    { id: 'gng-12', brand: 'Good & Gather', collection: 'category-c', fruit: 'Cranberries', name: 'Sweetened Cranberries', image: 'bgng12.png', detailImage: 'gng12.jpg', description: 'Cranberry manis untuk camilan buah yang praktis.' },
    { id: 'gng-13', brand: 'Good & Gather', collection: 'category-c', fruit: 'Blueberry', name: 'Dried Blueberries', image: 'bgng13.png', detailImage: 'gng13.jpg', description: 'Blueberry kering yang mudah dinikmati kapan saja.' },
    { id: 'ohme-1', brand: 'Oh Me!', collection: 'category-d', fruit: 'Blueberry', name: 'Freeze-Dried Blueberries', image: 'BOM1.png', detailImage: 'OM1.jpg', description: 'Blueberry utuh freeze-dried dengan rasa segar.' },
    { id: 'ohme-2', brand: 'Oh Me!', collection: 'category-d', fruit: 'Raspberries', name: 'Raspberries', image: 'BOM2.png', detailImage: 'OM2.jpg', description: 'Raspberry freeze-dried yang renyah dengan rasa asam-manis.' },
    { id: 'ohme-3', brand: 'Oh Me!', collection: 'category-d', fruit: 'Strawberry', name: 'Strawberry', image: 'BOM3.png', detailImage: 'OM3.jpg', description: 'Stroberi freeze-dried yang renyah dan ringan.' },
    { id: 'ohme-4', brand: 'Oh Me!', collection: 'category-d', fruit: 'Mangoes', name: 'Mangoes', image: 'BOM4.png', detailImage: 'OM4.jpg', description: 'Mangga freeze-dried dengan rasa tropis.' },
    { id: 'ohme-5', brand: 'Oh Me!', collection: 'category-d', fruit: 'Figs', name: 'Figs', image: 'BOM5.png', detailImage: 'OM5.jpg', description: 'Buah tin freeze-dried dengan rasa manis alami.' },
    { id: 'trufru-1', brand: 'Trü Frü', collection: 'category-e', fruit: 'Blueberry', name: 'Dark Chocolate Blueberries', image: 'btf1.png', detailImage: 'tf1.jpg', description: 'Blueberry berlapis cokelat hitam dan dibekukan segar.' },
    { id: 'trufru-2', brand: 'Trü Frü', collection: 'category-e', fruit: 'Blueberry', name: 'White Chocolate Blueberries', image: 'btf2.png', detailImage: 'tf2.jpg', description: 'Blueberry berlapis cokelat putih.' },
    { id: 'trufru-3', brand: 'Trü Frü', collection: 'category-e', fruit: 'Coconut', name: 'Chocolate Coconut', image: 'btf3.png', detailImage: 'tf3.jpg', description: 'Kelapa beku berlapis cokelat.' },
    { id: 'trufru-4', brand: 'Trü Frü', collection: 'category-e', fruit: 'Banana', name: 'Chocolate Bananas', image: 'btf4.png', detailImage: 'tf4.jpg', description: 'Potongan pisang beku berlapis cokelat.' },
    { id: 'trufru-5', brand: 'Trü Frü', collection: 'category-e', fruit: 'Banana', name: 'Chocolate Banana', image: 'btf5.png', detailImage: 'tf5.jpg', description: 'Pisang beku berlapis cokelat yang lembut.' },
    { id: 'trufru-6', brand: 'Trü Frü', collection: 'category-e', fruit: 'Strawberry', name: 'Chocolate Strawberries', image: 'btf6.png', detailImage: 'tf6.jpg', description: 'Stroberi beku berlapis cokelat.' },
    { id: 'trufru-7', brand: 'Trü Frü', collection: 'category-e', fruit: 'Raspberry', name: 'White Chocolate Raspberries', image: 'btf7.png', detailImage: 'tf7.jpg', description: 'Raspberry beku dengan lapisan cokelat putih.' },
    { id: 'rind-1', brand: 'RIND', collection: 'category-f', fruit: 'Coconut', name: 'Coconut Crisps', image: 'BR1.png', detailImage: 'R1.jpg', description: 'Crisps kelapa tanpa pemanis dengan tekstur renyah.' },
    { id: 'rind-2', brand: 'RIND', collection: 'category-f', fruit: 'Apple', name: 'Apple Chips', image: 'BR2.png', detailImage: 'R2.jpg', description: 'Irisan apel kering dengan kulit buah.' },
    { id: 'rind-4', brand: 'RIND', collection: 'category-f', fruit: 'Orange', name: 'Orange Chips', image: 'BR4.png', detailImage: 'R4.jpg', description: 'Irisan jeruk kering dengan kulit buah.' },
    { id: 'rind-5', brand: 'RIND', collection: 'category-f', fruit: 'Strawberry Blend', name: 'Strawberry Blend', image: 'BR5.png', detailImage: 'R5.jpg', description: 'Campuran stroberi kering dengan rasa buah yang segar.' },
    { id: 'rind-6', brand: 'RIND', collection: 'category-f', fruit: 'Tropical Blend', name: 'Tropical Blend', image: 'BR6.png', detailImage: 'R6.jpg', description: 'Campuran buah tropis kering dengan rasa manis alami.' },
    { id: 'rind-7', brand: 'RIND', collection: 'category-f', fruit: 'Kiwi', name: 'Kiwi Chips', image: 'BR7.png', detailImage: 'R7.jpg', description: 'Kiwi kering dengan rasa segar dan sedikit asam.' },
    { id: 'rind-8', brand: 'RIND', collection: 'category-f', fruit: 'Orchard Blend', name: 'Orchard Blend', image: 'BR8.png', detailImage: 'R8.jpg', description: 'Campuran buah orchard kering yang manis dan renyah.' },
    { id: 'rind-9', brand: 'RIND', collection: 'category-f', fruit: 'Coco-melon Blend', name: 'Coco-melon Blend', image: 'BR9.png', detailImage: 'R9.jpg', description: 'Campuran kelapa dan melon kering dengan rasa tropis.' },
    { id: 'rind-10', brand: 'RIND', collection: 'category-f', fruit: 'Kiwi', name: 'Kiwi Chips', image: 'BR10.png', detailImage: 'R10.jpg', description: 'Irisan kiwi kering dengan rasa buah alami.' }
  ];
  const collections = [
    { id: 'bliss-snacks', title: 'Bliss Snacks', eyebrow: 'Empat rasa untuk dipilih', note: 'Buah pilihan, renyah dan praktis.' },
    { id: 'category-c', title: 'Good & Gather', eyebrow: 'Koleksi C', note: 'Buah kering dan freeze-dried dari Good & Gather.' },
    { id: 'category-d', title: 'Oh Me!', eyebrow: 'Koleksi D', note: 'Buah freeze-dried Oh Me! yang ringan dan renyah.' },
    { id: 'category-e', title: 'Trü Frü', eyebrow: 'Koleksi E', note: 'Buah beku berlapis cokelat dari Trü Frü.' },
    { id: 'category-f', title: 'RIND', eyebrow: 'Koleksi F', note: 'Camilan buah kering dengan kulit buah dari RIND.' }
  ];

  window.FREEZE_DRY_CATALOG = { products, collections };
})();
