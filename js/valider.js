//////Validation pour le formulaire de contact
jQuery(document).ready(function ($) {

    //si le bouton valider est cliqué
    $('#submit').click(function () {

        //Recupere les données de tous les champs
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var regx = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
        var comment = $('textarea[name=comment]');
        var returnError = false;

        //Validation pour etre sur que quelque chose a bien été entré
        if (name.val()=='') {
            name.addClass('error');
            returnError = true;
        } else name.removeClass('error');

        if (email.val()=='') {
            email.addClass('error');
            returnError = true;
        } else email.removeClass('error');

        if(!regx.test(email.val())){
            email.addClass('error');
            returnError = true;
        } else email.removeClass('error');


        if (comment.val()=='') {
            comment.addClass('error');
            returnError = true;
        } else comment.removeClass('error');

        // Surligne les champs ou il y'a des erreurs et quitte
        if(returnError == true){
            return false;
        }

        //Organisation des données

        var data = 'name=' + name.val() + '&email=' + email.val() + '&comment='  + encodeURIComponent(comment.val());

        //désactive tous les champs
        $('.text').attr('disabled','true');

        //affiche le logo de chargement
        $('.loading').show();

        //debut du script Ajax
        $.ajax({
            //fichier php qui gere le formulaire de contact
            url: "contact.php",

            //On utilise la methode GET
            type: "GET",

            //copie les donnees
            data: data,

            //Ne charge pas la page en cache
            cache: false,

            //succes
            success: function (html) {
                //si contact.php a retourné 1/true (envoi du mail reussi)
                if (html==1) {

                    //affiche le message de réussite
                    $('.done').fadeIn('slow');

                    $(".form").find('input[type=text], textarea').val("");

                    //si contact.php a retourné 0/false (envoi du mail raté)
                } else alert('Désolé, une erreur est survenue. Veuillez réessayer.');
            }
        });

        //reset le bouton valider
        return false;
    });
});