import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;

public class NetlifyUploader {

    public static void main(String[] args) {
        String accessToken = "TU_TOKEN_NETLIFY";
        String siteId = "TU_SITE_ID";
        String filePath = "ruta/a/index.html";

        try {
            uploadFileToNetlify(accessToken, siteId, filePath);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void uploadFileToNetlify(String accessToken, String siteId, String filePath) throws IOException {
        // Endpoint del deploy
        String uploadUrl = "https://api.netlify.com/api/v1/sites/" + siteId + "/deploys";

        // Crear la conexión
        URL url = new URL(uploadUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        // Configurar método y headers
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Authorization", "Bearer " + accessToken);
        connection.setRequestProperty("Content-Type", "application/zip");
        connection.setDoOutput(true);

        // Leer el archivo a subir
        File file = new File(filePath);
        byte[] fileBytes = Files.readAllBytes(file.toPath());

        // Subir el archivo
        OutputStream os = connection.getOutputStream();
        os.write(fileBytes);
        os.close();

        // Leer respuesta
        int responseCode = connection.getResponseCode();
        System.out.println("Código de respuesta: " + responseCode);

        BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String line;
        System.out.println("Respuesta Netlify:");
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
    }
}
