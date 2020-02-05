<?php

namespace App\Events;

use App\Tweet;
use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TweetCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


   public $post;
   public $user;

    public function __construct(Tweet $post, User $user)
    {
        $this->post=$post;
        $this->user=$user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [
            new Channel('new-post'),
            new Channel('App.User.'.$this->post->user->id)
        ];
    }

    public function broadcastWith(){
        return [
            'post'=> array_merge($this->post->toArray(), [
                'user'=> $this->post->user
            ]
            ),
            'user'=> $this->user,
        ];
    }
}
