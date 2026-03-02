function insertMailto(id, place, me) {
  var elink = document.getElementById(id);
  elink.href = `mailto:${me}@${place}`;
}

insertMailto("mlink1", "pharo.org", "isloop");
insertMailto("mlink2", "inria.fr", "stephane.ducasse");