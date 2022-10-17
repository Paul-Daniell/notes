# Hoe werkt het internet ( voor Developers)

1. Use the ping command in your terminal to find the IP address of theguardian.com.

````Loading personal and system profiles took 3172ms.
C:\Users\diens> ping theguardian.com

Pinging theguardian.com [151.101.129.111] with 32 bytes of data:
Reply from 151.101.129.111: bytes=32 time=10ms TTL=60
Reply from 151.101.129.111: bytes=32 time=10ms TTL=60
Reply from 151.101.129.111: bytes=32 time=12ms TTL=60
Reply from 151.101.129.111: bytes=32 time=11ms TTL=60

Ping statistics for 151.101.129.111:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 10ms, Maximum = 12ms, Average = 10ms
    ```

2. Use the tracert command to see how many "hops" are taken to establish a connection with theguardian.com.

``` C:\Users\diens> tracert theguardian.com

Tracing route to theguardian.com [151.101.129.111]
over a maximum of 30 hops:

  1     4 ms     1 ms     2 ms  mijnmodem.kpn.home [192.168.2.254]
  2    22 ms    13 ms     8 ms  195-190-228-16.fixed.kpn.net [195.190.228.16]
  3     *      102 ms     *     kpn-as1136.kpn-asd-dc2.nl-ix.net [193.239.117.66]
  4     *        *        *     Request timed out.
  5    12 ms    10 ms    10 ms  151.101.129.111

Trace complete.
````

3. Using an URL you can also find the name servers of websites yourself. Use http://whois.domaintools.com/ to find the name servers of:
   google.com

```Name Servers	NS1.GOOGLE.COM (has 19,041 domains)
NS2.GOOGLE.COM (has 19,041 domains)
NS3.GOOGLE.COM (has 19,041 domains)
NS4.GOOGLE.COM (has 19,041 domains)
```

wincacademy.nl

```Name Servers	NS0.TRANSIP.NET (has 918,567 domains)
NS1.TRANSIP.NL (has 5,660 domains)
NS2.TRANSIP.EU (has 577 domains)
```

4. Lookup your own IP address: What Is My IP Address? IP Address Tools and More

My IP Address is:

IPv6: ? 2a02:a440:f359:1:14a2:6934:c425:9a16

IPv4: ? 77.161.159.193

#HTTP status codes.

- 1xx - informatief
- 2xx - succes
- 3xx - redirection
- 4xx - client error
- 5xx - server error

Fill in!

- A. Request Body\*
- B. Response Headers
- C. HTTP Status Code
- D. Verb
- E. Response Body\*
- F. Request Headers
- G. URI

![](img/Request%20%26%20Response.svg)
