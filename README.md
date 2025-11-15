This document is for actions that need to be carried out,

1.  change ALL disabled buttons to active buttons, This will be mainly in the Family History pages, Check to make sure you actually have the html file before carrying out the activation.
    Whilst this may seem a little odd, the relevant files do have the basic information, so they will just need to be updated at some point. In some cases these files will not have any additional information.

2.  Add list of Children to each html file, where applicable, Details should be available from he RootMagic application.

3.  Add the following, to html files that include images-

      <div class="gallery">
              <figure class="document">
                <img
                  class="photo"
                  src="Thumbnail path"
                  alt="Alternate Name"
                  data-full="../Main photo path"
                />
                <figcaption>Caption</figcaption>
              </figure>

       </div>
       
       <script src="../images.js"></script>

    This goes directly after the footer closing tab.
