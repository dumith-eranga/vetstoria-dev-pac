function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "phoenix.vetstoria.com"))
    return "PROXY localhost:8080" ;
  if (shExpMatch(host, "dev-oabp.vetstoria.com"))
    return "PROXY localhost:8080" ;
  if (shExpMatch(host, "booking-qa.vetstoria.com"))
    return "PROXY localhost:8080" ;
  return "DIRECT";
}
