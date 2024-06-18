function insertMailto(id, place, me) {
  var elink = document.getElementById(id);
  elink.href = `mailto:${me}@${place}`;
}

insertMailto("mlink1", "cirad.fr", "oleksandr.zaitsev");
insertMailto("mlink2", "inria.fr", "stephane.ducasse");