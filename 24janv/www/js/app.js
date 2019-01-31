/* 
Attendre le chargement du DOM
- Sélectionner le document
- Appliquer le fonction ".ready()"
- Ajouter une fonction de callback
*/
    $(document).ready( () => {

        // Sélectionner une balise avec jQuery : $('.class|#id|tag')
        let loadBtn = $('#loadBtn');
        let todoList = $('main ul');

        // Capter le click sur le bouton
        loadBtn.click( () => {
            asyncAjax();
        });

        /* 
        Requête async Ajax
        */
            const asyncAjax = () => {
                $.ajax({
                    url: '/api/todoes',

                    success: (data) => {
                        displayTodo(data)
                    },

                    error: (err) => {
                        console.error(err)
                    }
                });
            }
        //

        /* 
        Fonctionn pour afficher la liste de tâches
        */
            const displayTodo = (todoes) => {
                // Boucle sur la collection todoes
                for( let item of todoes ){
                    if( item.isDone === true ){
                        // Ajouter unne balise LI dans todoList
                        todoList.html( todoList.html()  + "<li class='isDone'>" + item.content + "</li>")
                    } else{
                        // Ajouter unne balise LI dans todoList
                        todoList.html( todoList.html()  + "<li>" + item.content + "</li>")
                    }
                }
            };
        //
    });
//