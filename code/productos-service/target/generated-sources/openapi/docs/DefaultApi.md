# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCatalogByProductId**](DefaultApi.md#getCatalogByProductId) | **GET** /api/catalog/{productId} | Obtener detalles e inventario de un producto |



## getCatalogByProductId

> CatalogResponse getCatalogByProductId(productId)

Obtener detalles e inventario de un producto

### Example

```java
// Import classes:
import com.bootcamp.productos.client.catalog.ApiClient;
import com.bootcamp.productos.client.catalog.ApiException;
import com.bootcamp.productos.client.catalog.Configuration;
import com.bootcamp.productos.client.catalog.models.*;
import com.bootcamp.productos.client.catalog.api.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        Long productId = 56L; // Long | 
        try {
            CatalogResponse result = apiInstance.getCatalogByProductId(productId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#getCatalogByProductId");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **productId** | **Long**|  | |

### Return type

[**CatalogResponse**](CatalogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Producto encontrado en catálogo |  -  |
| **404** | Producto no encontrado |  -  |

