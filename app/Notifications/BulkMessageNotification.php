<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class BulkMessageNotification extends Notification //implements ShouldQueue
{
    // use Queueable;

    public $from;
    public $subject;
    public $body;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($from, $subject, $body)
    {
        $this->from = $from;
        $this->subject = $subject;
        $this->body = $body;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->from($this->from, 'AB catering')
                    ->subject($this->subject)
                    ->line($this->body)
                    ->action('Login to your account', url('/customer/login'))
                    ->line('Thank you for choosing us!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
