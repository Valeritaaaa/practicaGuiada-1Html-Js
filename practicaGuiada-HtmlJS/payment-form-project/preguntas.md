1. ¿Qué función tiene preventDefault()?
-Lo que hace es evitar que el formulario se envie a un servidor, ya que en este proyecto se esta trabajando con JS y localStorage
2. ¿Cómo obtenemos un elemento del DOM  por su id?
Se utiliza document.getElementByiD("name"); Entonces esto permite localizar un elemento HTML mediante el valor de su id.
3. ¿Cómo obtenemos el valor de un <input>?
Se hace uso de la propiedad ".value". Por ejemplo: nameInput.value. Esto permite obtener el valor en que el usuario escribio el campo. 
4. ¿Qué diferencia existe entre un objeto y un array?
El objeto lo que representa es un resgistro individual que contiene propiedades con sus respectivos valores. Un Array permiete alamacenar varios elementos, por ejemplo en esta practica almacena multiples registros de pagos. 
5. ¿Para qué sirve el push()?
Sirve para agregar un nuevo elemento al final de un array 
6. ¿Por qué se utiliza JSON.stringify()?
Se utiliza para convertir un objeto o array de JavaScript en un texto antes de almacenarlo en el localStorage, ya que este trabaja principalmente con texto.
7. ¿Por qué se utiliza JSON.parse()?
Esto fucionsa pero como al contrario del JSON.stringify(), ya que el JSON.parse() lo que hace es convertir el texto almacenado en el localStorage a un objeto o array de JavaScript
8. ¿Qué diferencia existe entre localStorage.getItem() y localStorage.setItem()? 
localStorage.setItem() funciona para guardar información en el localStorage. 
localStorage.getItem() funciona para recuperar información almacenada 
Entonces el setItem() se utiliza para guardar y getItem() se usa para recuperar pagos. 
9. ¿Cómo se crea un elemento HTML desde JavaScript?
Se utiliza docuement.createElement()
10. ¿Qué función tiene el appendChild()?
Permite agregar un elemento HTML como hijo de otro elemento. por ejemplo en la practica se utiliza paymentList.appendChild(row); para agregar cada fila creada dentro el <tbody>
11. ¿Qué hace el forEach()?
Permite recorrer los elementos de un array uno por uno, en el caso de la practica lo que recorre es lo pagos uno por uno, entonces crea una fila de la tabala para cada regsitro. 
12. ¿Por qué los datos permanecen despues de refrescar la página?
Porque los datos se almacenan en el localStorage, el cual comcerva la información almacenada aunque la página se recargue. 