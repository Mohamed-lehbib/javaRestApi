
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import rest.PersonResource;

import java.net.URI;


public class App {
    public static void main(String[] args) {
        URI baseUri = URI.create("http://localhost:2222/");
        ResourceConfig config = new ResourceConfig();
        config.register(PersonResource.class);  // Register PersonResource
        GrizzlyHttpServerFactory.createHttpServer(baseUri, config);
        System.out.println("Jersey app started at " + baseUri);
    }
}

