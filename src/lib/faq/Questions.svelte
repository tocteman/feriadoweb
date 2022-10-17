<script>
  import LedSeparator from '$lib/ui/LedSeparator.svelte'
  const questions = [
    {
      q: "¿Pueden ingresar menores de edad?",
      a: "Sí, es un evento que permite el acceso de todas las edades pero recomendamos que los asistentes tengan 15 o más años."
    },
    {
      q: "¿Habrá bebidas alcohólicas?",
      a: "No, el Campanazo es un evento libre de alcohol. Sin embargo habrán bebidas gaseosas, energizantes, jugos y cocteles sin alcohol."
    },
    {
      q: "Compré mi entrada online, ¿debo canjear por una entrada física?",
      a: "No es necesario, tu entrada es el digital. Utiliza el código QR en tu correo, guárdalo y preséntalo al ingreso. "
    },
    {
      q: "¿A qué hora empieza y a qué hora termina?",
      a: "Empieza a las 7pm y termina a las 2am."
    },
    { 
      q: "¿Hay buses o transporte oficial del evento?",
      a: "No, recomendamos que tu ida y regreso sea coordinado con antelación con un familiar y que se fijen puntos de encuentro. Podrás también encontrar taxis, si optas por esta opción recomendamos siempre anotar placas y notificar a tus amigos o familiares."
    },
    {
      q: "Mi familiar me llevará al Campanazo, ¿hay alguna zona donde pueda esperar por mí en Caballo Campana?",
      a: "Sí, los padres o personas que vayan a esperar en la hostería pueden hacerlo en las zonas del restaurante mientras se desarrolla el evento."
    },
    {
      q: "¿Tengo que ir disfrazado?",
      a: "No es necesario, pero si optas por disfrazarte participas por varios premios."
    }, 
    {
      q: "¿Puedo ingresar mi vape?",
      a: "No, lo sentimos, están prohibidos."
    }, 
    {
      q: "¿Qué incluye mi entrada Club?",
      a: "Acceso general al recinto, a la pista de baile frente al escenario y a las zonas principales. Podrás presenciar a los shows de Alex Ponce y de nuestros DJs y ser parte de la fiesta de disfraces."
    }, 
    {
      q: "¿Qué incluye mi entrada VIP?",
      a: "Los mismos beneficios de Club más acceso VIP, zona VIP, bebidas ilimitadas y acceso a la tarima con los DJs."
    }, 
    {
      q: "¿Dónde puedo comprar mis entradas?",
      a: "Online en Meet2go.com. Presencialmente, en Vrooms en la Calle Larga y Benigno Malo, en Pizzo Tr3s y con promotores oficiales."
    }, 
    {
      q: "¿Si salgo del evento puedo ingresar nuevamente?",
      a: "No, el ingreso es único y se efectúa una sola vez. Una vez abandonado el recinto no se podrá reingresar. Recomendamos llevar todo lo necesario antes de ingresar."
    }, 
    {
      q: "¿Hay cobertura de telefonía celular?",
      a: "Sí, pero con intermitencia, por lo que recomendamos previamente coordinar puntos de encuentro y horas con tus amigos."
    }, 
    {
      q: "¿Si tengo algún inconveniente durante el evento a donde debo acudir?",
      a: "Puedes acercarte a cualquier persona del Staff de El Feriado o Campanazo, o directamente a la carpa de ingreso. Estaremos gustosos de ayudarte con cualquier necesidad."
    }
  ]

  const setColor = index => {
    if (index % 3 === 0) { return "lime" }
    if (index % 2 === 0 ) { return "pink"}
    return "yellow"
  }

</script>

<div class="mx-8 mx-auto flex flex-col space-y-4 leading-normal py-8">
  <h3 class="italic mb-4">Si tienes cualquier duda adicional, déjanosla saber mediante Whatsapp</h3>
  <LedSeparator color={"pink"}/>
  {#each questions as x, i}
    <div>
      <h3 class="font-bold text-lg">
        {x.q}
      </h3>
      <h3 class="text-lg">
        {x.a}
      </h3>
      <div class="mt-6 mb-4">
        <LedSeparator color={setColor(i)}/>
      </div>

    </div>
  {/each}

</div>
