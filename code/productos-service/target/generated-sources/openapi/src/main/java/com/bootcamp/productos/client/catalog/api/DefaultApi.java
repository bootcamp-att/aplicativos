package com.bootcamp.productos.client.catalog.api;

import com.bootcamp.productos.client.catalog.ApiClient;

import com.bootcamp.productos.client.catalog.model.CatalogResponse;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2026-09-29T12:42:06.984043708-06:00[America/Mexico_City]")
public class DefaultApi {
    private ApiClient apiClient;

    public DefaultApi() {
        this(new ApiClient());
    }

    public DefaultApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Obtener detalles e inventario de un producto
     * 
     * <p><b>200</b> - Producto encontrado en catálogo
     * <p><b>404</b> - Producto no encontrado
     * @param productId  (required)
     * @return CatalogResponse
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public CatalogResponse getCatalogByProductId(Long productId) throws RestClientException {
        return getCatalogByProductIdWithHttpInfo(productId).getBody();
    }

    /**
     * Obtener detalles e inventario de un producto
     * 
     * <p><b>200</b> - Producto encontrado en catálogo
     * <p><b>404</b> - Producto no encontrado
     * @param productId  (required)
     * @return ResponseEntity&lt;CatalogResponse&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<CatalogResponse> getCatalogByProductIdWithHttpInfo(Long productId) throws RestClientException {
        Object localVarPostBody = null;
        
        // verify the required parameter 'productId' is set
        if (productId == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'productId' when calling getCatalogByProductId");
        }
        
        // create path and map variables
        final Map<String, Object> uriVariables = new HashMap<String, Object>();
        uriVariables.put("productId", productId);

        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        final String[] localVarAccepts = { 
            "application/json"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = {  };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] {  };

        ParameterizedTypeReference<CatalogResponse> localReturnType = new ParameterizedTypeReference<CatalogResponse>() {};
        return apiClient.invokeAPI("/api/catalog/{productId}", HttpMethod.GET, uriVariables, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
    }
}
