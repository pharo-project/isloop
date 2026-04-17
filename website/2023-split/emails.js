function insertMailto(id, place, me) {
  var elink = document.getElementById(id);
  elink.href = `mailto:${me}@${place}`;
}

insertMailto("mlink1", "dmi.uns.ac.rs", "goca");
insertMailto("mlink2", "inria.fr", "stephane.ducasse");