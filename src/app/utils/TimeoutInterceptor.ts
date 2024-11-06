import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, timeout, catchError, of, retry, delayWhen, timer } from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  private maxRetries = 3; // Maximum number of retries

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      timeout(10000), // 10 seconds timeout
      retry({
        delay: (error, count) => {
          if (error instanceof HttpErrorResponse) {
            console.error('Request failed with error and will retry', error);

            // Retry on specific error codes and within the maximum retry limit
            if (error.status >= 500 && count < this.maxRetries) {
              return timer(1000); // Retry after 1 second
            }
          }

          // Stop retrying for other errors
          return throwError(() => error);
        },
        count: this.maxRetries
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Request failed with error and check it out', error);

        // Handle specific errors and return appropriate responses
        if (error.status === 0) {
          // Handle network error or timeout
          return throwError(() => new Error('Network error or timeout occurred'));
        } else if (error.status === 404) {
          // Handle not found error
          return throwError(() => new Error('Resource not found'));
        } else if (error.status >= 500) {
          // Handle server errors
          return throwError(() => new Error('Server error occurred'));
        } else {
          // Handle other errors
          return throwError(() => new Error('An unexpected error occurred'));
        }
      })
    );
  }
}