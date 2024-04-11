class HttpRequest {
  private baseUrl: string;

  public headers?: Record<string, string>;

  private token?: string;

  constructor(instanse: { baseUrl: string; headers?: Record<string, string> }) {
    this.baseUrl = instanse.baseUrl;
    this.headers = instanse.headers;
  }

  public setTokent(value: string) {
    this.token = value;
  }

  private createSearchParams(params: SearchParams) {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const value = params[key];

        if (Array.isArray(value)) {
          value.forEach((currentValue) => searchParams.append(key, currentValue));
        } else if (value) {
          searchParams.set(key, value);
        }
      }
    }

    return `?${searchParams.toString()}`;
  }

  private async request<T>(endpoint: string, method: RequestInit['method'], options: RequestOptions = {}) {
    let url = `${this.baseUrl}/${endpoint}`;

    if (options.params) {
      url += this.createSearchParams(options.params);
    }

    const requestConfi = {
      ...options,
      url: endpoint,
      method,
      headers: {
        ...(!!options?.headers && options.headers),
        ...this.headers,
        ...(!!this.token && { Authorization: `Bearer ${this.token}` }),
      },
    };

    const response: Response = await fetch(url, requestConfi);

    return {
      success: response.ok,
      data: (await response.json()) as unknown as T,
      statusText: response.statusText,
      statusCode: response.status,
    };
  }

  get<T>(endpoint: string, options: Omit<RequestOptions, 'body'> = {}) {
    return this.request<T>(endpoint, 'GET', options);
  }

  post<T>(endpoint: string, body?: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'POST', {
      ...options,
      ...(!!body && { body: JSON.stringify(body) }),
    });
  }

  delete<T>(endpoint: string, options: Omit<RequestOptions, 'body'> = {}) {
    return this.request<T>(endpoint, 'DELETE', options);
  }

  put<T>(endpoint: string, body?: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'PUT', {
      ...options,
      ...(!!body && { body: JSON.stringify(body) }),
    });
  }

  patch<T>(endpoint: string, body?: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'PATCH', {
      ...options,
      ...(!!body && { body: JSON.stringify(body) }),
    });
  }
}
