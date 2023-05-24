import { CoffeeListItem } from "./CoffeeListItem";

export function CoffeeList() {
  return (
    <div className="mb-10">
      <h3 className="mb-8">Nossos cafés</h3>
      <div className="grid grid-cols-4 gap-x-8 gap-y-12 py-8">
        <CoffeeListItem
          src="/src/assets/coffee-1.png"
          tags={['Especial', 'Alcoólico']}
          title="Irlandês"
          description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-2.png"
          tags={['Especial']}
          title="Árabe"
          description="Bebida preparada com grãos de café árabe e especiarias"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-3.png"
          tags={['Especial', 'Com Leite']}
          title="Chocolate Quente"
          description="Bebida feita com chocolate dissolvido no leite quente e café"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-4.png"
          tags={['Tradicional', 'Com Leite']}
          title="Mocaccino"
          description="Café expresso com calda de chocolate, pouco leite e espuma"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-5.png"
          tags={['Tradicional', 'Com Leite']}
          title="Macchiato"
          description="Café expresso misturado com um pouco de leite quente e espuma"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-6.png"
          tags={['Tradicional', 'Com Leite']}
          title="Capuccino"
          description="Bebida com canela feita de doses iguais de café, leite e espuma"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-7.png"
          tags={['Tradicional', 'Com Leite']}
          title="Latte"
          description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-8.png"
          tags={['Tradicional', 'Com Leite']}
          title="Café com Leite"
          description="Meio a meio de expresso tradicional com leite vaporizado"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-9.png"
          tags={['Tradicional']}
          title="Expreso Gelado"
          description="Bebida preparada com café expresso e cubos de gelo"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-10.png"
          tags={['Tradicional']}
          title="Expresso Cremoso"
          description="Café expresso tradicional com espuma cremosa"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-11.png"
          tags={['Tradicional']}
          title="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
          price={9.90}
        />
        <CoffeeListItem
          src="/src/assets/coffee-12.png"
          tags={['Tradicional']}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9.90}
        />
      </div>
    </div>
  )
}