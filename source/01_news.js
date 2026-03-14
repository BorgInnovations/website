function loadNews(){
    var heading = '<h3>New 01 Update!</h3>'
    var body = '<div> <p>A new 01 App update is available! This update <i>should</i> auto install after 24 hours. However, with PWAs this does not always work. On the "about" page try the force refresh option, or delete the app and resinstall if the update does not auto populate. Make sure to EXPORT all Author| and Luminary projects BEFORE deleting as you may lose in-app files.</p> <p> <a class="bbus" href="./01_luminary.html">Try out the LuminaryIDE</a> </p> </div>'
    document.getElementById("newspanel").innerHTML = heading + body
}