document.addEventListener('DOMContentLoaded', () => {
    const meatItems = document.querySelectorAll('.meat-category li');
    const carrinhoItens = document.getElementById('carrinho-itens');
    const totalPreco = document.getElementById('total-preco');
    const finalizarCompraBtn = document.getElementById('finalizar-compra');
    const meatDetails = document.getElementById('meat-details');
    let total = 0;

    const meatInfo = {
        'Picanha': {
            description: 'Corte nobre e suculento, ideal para churrasco. Rica em sabor e macia quando bem preparada.',
            image: 'https://th.bing.com/th/id/OIP.xocjJDlRMy5g3vDQg3bb5AHaGJ?w=216&h=180&c=7&r=0&o=5&pid=1.7',
            price: 59.90
        },
        'Contra-filé': {
            description: 'Corte versátil e saboroso, ótimo para bifes e churrasco. Possui uma camada de gordura que o deixa suculento.',
            image: 'https://th.bing.com/th/id/OIP.xROBlRyaxT0IVKEiyhR-OgHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7',
            price: 39.90
        },
        'Costela': {
            description: 'Corte rico em sabor, perfeito para churrasco ou assado lento. Muito suculenta e macia quando bem preparada.',
            image: 'https://th.bing.com/th/id/OIP.HmsPAQ5PBut04hlSD8IN_gHaF7?w=254&h=202&c=7&r=0&o=5&pid=1.7',
            price: 29.90
        },
        'Filé Mignon': {
            description: 'O corte mais macio da carne bovina. Excelente para bifes e medalhões, com pouca gordura e sabor suave.',
            image: 'https://th.bing.com/th/id/OIP.40RL39hlvZe3S_T6cqEY-AHaGJ?w=206&h=180&c=7&r=0&o=5&pid=1.7',
            price: 69.90
        },
        'Lombo': {
            description: 'Corte magro e versátil da carne suína. Ótimo para assados, grelhados e bifes.',
            image: 'https://th.bing.com/th/id/OIP.E7-clXlnPizgmMBcqJU7pwHaE7?w=250&h=180&c=7&r=0&o=5&pid=1.7',
            price: 24.90
        },
        'Costelinha': {
            description: 'Corte saboroso e suculento, ideal para churrasco ou assado. Muito apreciado em churrascos.',
            image: 'https://th.bing.com/th/id/OIP.skybXpC2oFW6dg6W4HPaVAHaE8?w=274&h=182&c=7&r=0&o=5&pid=1.7',
            price: 22.90
        },
        'Pernil': {
            description: 'Corte grande e saboroso, perfeito para assados em ocasiões especiais. Muito suculento quando bem preparado.',
            image: 'https://th.bing.com/th?q=Pernil+De+Boi&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247',
            price: 19.90
        },
        'Linguiça': {
            description: 'Embutido versátil e saboroso, ótimo para churrasco, feijão ou como acompanhamento.',
            image: 'https://th.bing.com/th?q=Lingui%c3%a7a+Aurora+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247',
            price: 15.90
        },
        'Peito de Frango': {
            description: 'Corte magro e versátil de frango. Excelente fonte de proteína, ideal para grelhados e receitas leves.',
            image: 'https://th.bing.com/th/id/OIP.pRO_WtlWR5LCTMoivgDuHAHaFx?w=215&h=180&c=7&r=0&o=5&pid=1.7',
            price: 14.90
        },
        'Coxa e Sobrecoxa': {
            description: 'Cortes suculentos e saborosos de frango. Ótimos para assados, frituras e churrascos.',
            image: 'https://th.bing.com/th/id/OIP.Mx1K7olKcTZrM-u5bcdOpwHaJQ?w=134&h=180&c=7&r=0&o=5&pid=1.7',
            price: 12.90
        },
        'Asa de Frango': {
            description: 'Corte saboroso e popular em churrascos e petiscos. Versátil e ótimo para diversas preparações.',
            image: 'https://th.bing.com/th/id/OIP.MiCIGYnGcJdZHdvBRzOrvQHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7',
            price: 13.90
        },
        'Peru': {
            description: 'Ave de grande porte, tradicional em celebrações. Carne magra e saborosa, excelente para assados.',
            image: 'https://th.bing.com/th/id/OIP.FCgd2A9P7KC7WTua2X2KNAHaDe?w=321&h=164&c=7&r=0&o=5&pid=1.7',
            price: 21.90
        },
        'Espetinho de Legumes': {
            description: 'Deliciosa combinação de legumes grelhados, perfeito para churrasco vegano.',
            image: 'https://th.bing.com/th/id/OIP.IHhGF-bz5h4wANeyJ6og7gHaE8?w=250&h=180&c=7&r=0&o=5&pid=1.7',
            price: 9.90
        },
        'Hambúrguer de Grão-de-Bico': {
            description: 'Saboroso e nutritivo, perfeito para seu churrasco vegano.',
            image: 'https://th.bing.com/th/id/OIP.zMPkswV2ALhj4tsM4lCv4gHaE8?w=243&h=180&c=7&r=0&o=5&pid=1.7',
            price: 12.90
        },
        'Seitan Grelhado': {
            description: 'Alternativa vegana rica em proteínas, excelente para churrascos.',
            image: 'https://th.bing.com/th/id/OIP.n_k-n0hXoEok_uGabbbE3wHaD4?w=345&h=181&c=7&r=0&o=5&pid=1.7',
            price: 15.90
        }
    };

    function updateMeatDetails(meatName) {
        const info = meatInfo[meatName];
        if (info) {
            meatDetails.innerHTML = `
                <h3>${meatName}</h3>
                <p>${info.description}</p>
                <p>Preço: R$ ${info.price.toFixed(2)}/kg</p>
                <img src="${info.image}" alt="${meatName}" class="meat-image" data-meat="${meatName}">
            `;
            meatDetails.style.display = 'block';

            const meatImage = meatDetails.querySelector('.meat-image');
            meatImage.addEventListener('click', () => addToCart(meatName, info.price));
        } else {
            meatDetails.innerHTML = '<p>Selecione um corte para ver mais detalhes.</p>';
            meatDetails.style.display = 'block';
        }
    }

    meatItems.forEach(item => {
        item.addEventListener('click', () => {
            meatItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const meatName = item.textContent.trim();
            updateMeatDetails(meatName);
        });
    });

    function addToCart(name, price) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.textContent = `${name} - R$ ${price.toFixed(2)}/kg`;
        carrinhoItens.appendChild(itemDiv);

        total += price;
        totalPreco.textContent = total.toFixed(2);
    }

    const offerCards = document.querySelectorAll('.offer-card');
    offerCards.forEach(card => {
        const meatName = card.querySelector('h3').textContent.trim();
        const priceText = card.querySelector('p').textContent;
        const price = parseFloat(priceText.replace('R$ ', '').replace(',', '.'));

        const cardImage = card.querySelector('img');
        cardImage.addEventListener('click', () => {
            addToCart(meatName, price);
        });
    });

    const veganItems = document.querySelectorAll('.vegan-bbq-item');
    veganItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.trim();
        const itemImage = item.querySelector('img');
        const info = meatInfo[itemName];

        if (info) {
            itemImage.addEventListener('click', () => {
                addToCart(itemName, info.price);
            });
        }
    });

    finalizarCompraBtn.addEventListener('click', () => {
        if (total > 0) {
            alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
            carrinhoItens.innerHTML = '';
            total = 0;
            totalPreco.textContent = '0.00';
        } else {
            alert('Seu carrinho está vazio!');
        }
    });
});