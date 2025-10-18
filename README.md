This document is for actions that need to be carried out,

1. change ALL disabled buttons to active buttons, This will be mainly in the Family History pages, Check to make sure you actually have the html file before carrying out the activation.
   Whilst this may seem a little odd, the relevant files do have the basic information, so they will just need to be updated at some point. In some cases these files will not have any additional information.

2. Add list of Children to each html file, where applicable, Details should be available from he RootMagic application.

3. Add the following, to html files that include images- <div id="lightbox" class="lightbox" onclick="closeLightbox()">
   <img id="lightbox-img" src="" alt="Expanded view" />
   </div>
   <script src="../images.js"></script>

   This goes directly after the footer closing tab.
