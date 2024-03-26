import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {
  CLIPBOARD_OPTIONS,
  ClipboardButtonComponent,
  MarkdownModule,
  provideMarkdown,
} from 'ngx-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, MarkdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideMarkdown({ loader: HttpClient })],
})
export class AppComponent {
  [x: string]: any;
}

provideMarkdown({
  clipboardOptions: {
    provide: CLIPBOARD_OPTIONS,
    useValue: {
      buttonComponent: ClipboardButtonComponent,
    },
  },
});
